import LoginButton from '@/components/buttons/LoginButton';
import LoginForm from '@/components/LoginForm';
import type { NextPage } from 'next';
import { useState } from 'react';

const LoginPage: NextPage = () => {
  const [selected, setSelected] = useState('user');
  return (
    <div className='h-screen pl-10 pr-10'>
      <div className='flex justify-evenly'>
        <LoginButton
          target='user'
          isSelected={selected == 'user'}
          setSelected={setSelected}
        />
        <LoginButton
          target='company'
          isSelected={selected == 'company'}
          setSelected={setSelected}
        />
      </div>
      <LoginForm target={selected} />
    </div>
  );
};

export default LoginPage;
