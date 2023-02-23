import type { NextPage } from 'next';
import { useState } from 'react';
import LoginButton from '@/components/buttons/LoginButton';
import SignUpForm from '@/components/SignUpForm';

const SignUpPage: NextPage = () => {
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
      <SignUpForm target={selected} />
    </div>
  );
};

export default SignUpPage;
