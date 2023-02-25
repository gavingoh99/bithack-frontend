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

const SignUpModal: FC = () => {
  const { modalOpen, setModalOpen } = useContext(AppContext);
  const [registrationStage, setRegistrationStage] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const resetForm = () => {
    setRegistrationStage(0);
    setUsername('');
    setPassword('');
  };
  useEffect(() => {
    resetForm();
  }, [modalOpen]);
  const handleSignUp = async () => {
    const endpoint =
      registrationStage == 1 ? 'signupcompany' : 'signupapplicant';
    await fetch(`https://bithack-backend.onrender.com/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    alert('Registration successful! Proceed by logging in.');
    setModalOpen(1);
  };
  return (
    <div
      className={`${
        modalOpen == 2 ? '' : 'hidden'
      } absolute top-1/2 left-1/2 z-10 flex h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 transform `}
    >
      <div className='flex flex-3 flex-col items-center rounded-tl-xl rounded-bl-xl bg-lightBeige  p-10'>
        <div
          onClick={() => setRegistrationStage(0)}
          className={`${
            registrationStage != 0 && 'cursor-pointer'
          } text-2xl font-bold`}
        >
          register
        </div>
        {registrationStage == 0 ? (
          <Selection setRegistrationStage={setRegistrationStage} />
        ) : (
          <Credentials
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        )}
        {registrationStage != 0 && (
          <div className='flex  items-center text-xl font-bold'>
            <button onClick={() => handleSignUp()}>continue</button>
          </div>
        )}
      </div>
      <div className='flex flex-2 items-center justify-center rounded-tr-xl rounded-br-xl bg-powderRed p-10'>
        <Image
          src={
            registrationStage == 1
              ? company
              : registrationStage == 2
              ? user
              : general
          }
          alt='general image'
        />
      </div>
    </div>
  );
};

export default SignUpModal;
