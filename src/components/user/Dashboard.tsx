// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';
import GreetingModule from './GreetingModule';
import CoursesPreview from './CoursesPreview';
import ProgressModule from './ProgressModule';
import Statistics from './Statistics';
import JobBoard from './JobBoard';

const Dashboard: FC = () => {
  return (
    <div className='grid h-screen grid-cols-2 grid-rows-6 gap-5 pl-5 pr-5 pb-5'>
      <GreetingModule />
      <ProgressModule />
      <CoursesPreview />
      <Statistics />
      <JobBoard />
    </div>
  );
};
export default Dashboard;
