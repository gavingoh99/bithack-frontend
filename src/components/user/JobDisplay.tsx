// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

type JobDisplayProps = {
  job: {
    jobTitle: string;
    company: string;
  };
};
const JobDisplay: FC<JobDisplayProps> = ({ job }) => {
  return (
    <div className='flex flex-2 items-center gap-5 rounded-xl bg-lightGray p-5'>
      <div className='bg-lightBeige p-6'></div>
      <div className='flex flex-col font-bold'>
        <div className='text-s'>{job.jobTitle}</div>
        <div className='text-xs'>{job.company}</div>
      </div>
    </div>
  );
};
export default JobDisplay;
