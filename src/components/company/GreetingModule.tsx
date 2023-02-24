// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { AppContext } from '@/pages/_app';
import { FC, useContext } from 'react';

const GreetingModule: FC = () => {
  const { user } = useContext(AppContext);
  return (
    <div className='row-start-1 row-end-3 flex h-full w-full flex-col gap-1 rounded-xl bg-lightGray p-10'>
      <div className='text-5xl font-bold text-powderRed'>Hello, {user}!</div>
      <div>It's good to see you again.</div>
    </div>
  );
};
export default GreetingModule;
