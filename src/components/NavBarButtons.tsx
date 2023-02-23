import { FC } from 'react';
import Link from 'next/link';

const NavBarButtons: FC = () => {
  return (
    <div className='flex justify-between gap-10'>
      <Link href='/login'>Login</Link>
      <Link href='/signup'>Sign Up</Link>
    </div>
  );
};

export default NavBarButtons;
