// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC, useState } from 'react';
import JobDisplay from './JobDisplay';

const JobBoard: FC = () => {
  const jobs = [
    { jobTitle: 'Frontend Developer', company: 'Shopee' },
    { jobTitle: 'Frontend Developer', company: 'Tiktok' },
    { jobTitle: 'Frontend Developer', company: 'Microsoft' },
    { jobTitle: 'Fullstack Developer', company: 'Microsoft' },
  ];
  const [jobIndex, setJobIndex] = useState(1);
  return (
    <div className='row-start-6 row-end-7 h-full w-full'>
      <div className=' flex h-full'>
        <JobDisplay job={jobs[jobIndex]} />
        <div className='flex flex-1 items-center justify-evenly'>
          <button
            onClick={() =>
              setJobIndex((prev) => {
                if (prev - 1 < 0) {
                  return jobs.length - 1;
                } else {
                  return prev - 1;
                }
              })
            }
            className='rounded-full border border-gray bg-lightGray p-2 text-gray'
          >
            Prev
          </button>
          <button
            onClick={() =>
              setJobIndex((prev) => {
                if (prev + 1 > jobs.length - 1) {
                  return 0;
                } else {
                  return prev + 1;
                }
              })
            }
            className='rounded-full border border-gray bg-lightGray p-2 text-gray'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
