import { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type SignUpFormProps = {
  target: string;
};
const SignUpForm: FC<SignUpFormProps> = ({ target }) => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSignup = async () => {
    let endpoint = target == 'user' ? 'signupapplicant' : 'signupcompany';
    let response = await fetch(`http://localhost:5001/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    response = await response.json();
    console.log(response);
    alert('Sign up successful, Proceed to login!');
    router.push('/login');
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
        onClick={() => handleSignup()}
        className='rounded-3xl border border-black pt-2 pb-2 pl-5 pr-5'
      >
        sign up
      </button>
    </div>
  );
};

export default SignUpForm;
