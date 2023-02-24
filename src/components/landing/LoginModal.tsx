// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { AppContext } from '@/pages/_app';
import { FC, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import general from '../../../public/images/general.png';
import user from '../../../public/images/user.png';
import company from '../../../public/images/company.png';
import Selection from './Selection';
import Credentials from './Credentials';
import { useRouter } from 'next/router';

const LoginModal: FC = () => {
  const { modalOpen, setModalOpen, setUser, setPostings } =
    useContext(AppContext);
  const [loginStage, setLoginStage] = useState(0);
  const [usernameInput, setUsernameInput] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const resetForm = () => {
    setLoginStage(0);
    setUsernameInput('');
    setPassword('');
  };
  useEffect(() => {
    resetForm();
  }, [modalOpen]);
  const handleSignUp = async () => {
    const endpoint = loginStage == 1 ? 'logincompany' : 'loginapplicant';
    let response = await fetch(
      `https://bithack-backend.onrender.com/${endpoint}`,
      {
        method: 'POST',
        body: JSON.stringify({ username: usernameInput, password: password }),
      }
    );
    response = await response.json();
    const { username, postings } = response;
    console.log(username);
    setUser(username);
    setPostings(postings);
    setModalOpen(0);
    router.push(loginStage == 1 ? '/company' : '/user');
  };
  return (
    <div
      className={`${
        modalOpen == 1 ? '' : 'hidden'
      } absolute top-1/2 left-1/2 z-10 flex h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 transform `}
    >
      <div className='flex flex-2 items-center justify-center rounded-tl-xl rounded-bl-xl bg-powderRed p-10'>
        <Image
          src={loginStage == 1 ? company : loginStage == 2 ? user : general}
          alt='general image'
        />
      </div>
      <div className='flex flex-3 flex-col items-center rounded-tr-xl rounded-br-xl bg-lightBeige  p-10'>
        <div
          onClick={() => setLoginStage(0)}
          className={`${
            loginStage != 0 && 'cursor-pointer'
          } text-2xl font-bold`}
        >
          login
        </div>
        {loginStage == 0 ? (
          <Selection setRegistrationStage={setLoginStage} />
        ) : (
          <Credentials
            username={usernameInput}
            setUsername={setUsernameInput}
            password={password}
            setPassword={setPassword}
          />
        )}
        {loginStage != 0 && (
          <div className='flex  items-center text-xl font-bold'>
            <button onClick={() => handleSignUp()}>continue</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
