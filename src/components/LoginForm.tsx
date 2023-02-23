import { AppContext } from '@/pages/_app';
import { useRouter } from 'next/router';
import { FC, useContext, useState } from 'react';

type LoginFormProps = {
  target: string;
};
const LoginForm: FC<LoginFormProps> = ({ target }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { setUser, setApplication, setPostings } = useContext(AppContext);
  const handleLogin = async () => {
    const endpoint = target == 'user' ? 'loginapplicant' : 'logincompany';
    let response = await fetch(`http://localhost:5001/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    setUser(username);
    response = await response.json();
    if (target == 'user') {
      const { application } = response;
      if (application == '') {
        router.push('/user/createprofile');
      } else {
        setApplication(application);
        router.push('/user');
      }
    } else {
      const { postings } = response;
      const result = [];
      for (let i = 0; i < postings.length; i++) {
        let response = await fetch(
          `http://localhost:5001/postings/${postings[i]}`
        );
        response = await response.json();
        result.push(response);
      }
      setPostings(result);
      router.push(`/company`);
    }
  };
  return (
    <div className='flex flex-col items-center gap-10 p-10'>
      <div>{target} login</div>
      <div className='flex items-center gap-5'>
        <div>username</div>
        <input
          className='rounded-3xl border border-black p-2'
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
      </div>
      <div className='flex items-center gap-5'>
        <div>password</div>
        <input
          className='rounded-3xl border border-black p-2'
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </div>
      <button
        onClick={handleLogin}
        className='rounded-3xl border border-black pt-2 pb-2 pl-5 pr-5'
      >
        login
      </button>
    </div>
  );
};

export default LoginForm;
