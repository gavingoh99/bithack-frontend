// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

const JobBoard: FC = () => {
  return (
    <div className='row-start-6 row-end-7 -mt-20 h-full w-full'>
      <div className='text-xl font-bold'>Jobs</div>
      <div className='mt-2 flex gap-16 font-bold'>
        <div>Full Time</div>
        <div className='text-lightGray'>Academia</div>
        <div className='text-lightGray'>Freelance</div>
      </div>
      <div className='mt-2 flex h-full'>
        <div className='flex flex-2 items-center gap-5 rounded-xl bg-lightGray p-5'>
          <div className='bg-lightBeige p-6'></div>
          <div className='flex flex-col font-bold'>
            <div className='text-s'>Frontend Developer</div>
            <div className='text-xs'>Microsoft</div>
          </div>
        </div>
        <div className='flex flex-1 items-center justify-evenly'>
          <button className='rounded-full border border-gray bg-lightGray p-2 text-gray'>
            Prev
          </button>
          <button className='rounded-full border border-gray bg-lightGray p-2 text-gray'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
