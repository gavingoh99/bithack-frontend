// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC, useContext } from 'react';
import { AppContext } from '@/pages/_app';

const NavBarButtons: FC = () => {
  const { setModalOpen } = useContext(AppContext);
  return (
    <div className='flex justify-between gap-10 text-gray'>
      <button
        onClick={() => setModalOpen(1)}
        className='text-lg drop-shadow-sm'
        href='/login'
      >
        Login
      </button>
      <button
        onClick={() => setModalOpen(2)}
        className='text-lg drop-shadow-sm'
        href='/signup'
      >
        Sign Up
      </button>
    </div>
  );
};

export default NavBarButtons;
