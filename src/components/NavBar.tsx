// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC, useContext } from 'react';
import NavBarButtons from './NavBarButtons';
import { AppContext } from '../pages/_app';
import Greeting from './Greeting';
import Link from 'next/link';

const NavBar: FC = () => {
  const { user, application } = useContext(AppContext);
  return (
    <div className='flex items-center justify-between bg-lightBeige p-5 font-bold'>
      <Link
        href={`${user == '' ? '/' : application == '' ? '/company' : '/user'}`}
        className='text-2xl text-gray drop-shadow-sm'
      >
        Hustle
      </Link>
      {user == '' ? <NavBarButtons /> : <Greeting />}
    </div>
  );
};

export default NavBar;
