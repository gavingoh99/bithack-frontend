// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC, useContext, useEffect } from 'react';
import GreetingModule from './GreetingModule';
import CoursesPreview from './CoursesPreview';
import ProgressModule from './ProgressModule';
import Statistics from './Statistics';
import JobBoard from './JobBoard';
import { AppContext } from '@/pages/_app';
import CreateProfileModal from './CreateProfileModal';
import AptitudeModule from './AptitudeModule';

const Dashboard: FC = () => {
  const { application, setModalOpen } = useContext(AppContext);
  useEffect(() => {
    if (application == '') {
      setModalOpen(4);
    }
  }, []);
  return (
    <div className='grid h-screen grid-cols-2 grid-rows-6 gap-5 pl-5 pr-5 pb-5'>
      <CreateProfileModal />
      <GreetingModule />
      <ProgressModule />
      <CoursesPreview />
      <Statistics />
      <AptitudeModule />
      <JobBoard />
    </div>
  );
};
export default Dashboard;
