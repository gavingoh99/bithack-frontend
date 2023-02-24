// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';
import GreetingModule from './GreetingModule';
import PostingsPreview from './PostingsPreview';
import ProgressModule from './ProgressModule';
import QuickAccess from './QuickAccess';
import Statistics from './Statistics';

const Dashboard: FC = () => {
  return (
    <div className='grid h-screen grid-cols-2 grid-rows-6 gap-5 pl-5 pr-5 pb-5'>
      <GreetingModule />
      <ProgressModule />
      <PostingsPreview />
      <Statistics />
      <QuickAccess />
    </div>
  );
};
export default Dashboard;
