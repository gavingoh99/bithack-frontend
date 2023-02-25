// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

const ProgressModule: FC = () => {
  return (
    <div className='row-start-1 row-end-2 flex h-full w-full gap-5 '>
      <div className='flex flex-1 items-center justify-center gap-5 rounded-xl bg-lightGray'>
        <div className='text-5xl font-bold text-powderRed'>5</div>
        <div className='flex flex-col font-bold'>
          <div>Courses</div>
          <div>completed</div>
        </div>
      </div>
      <div className='flex flex-1 items-center justify-center gap-5 rounded-xl bg-lightGray'>
        <div className='text-5xl font-bold text-powderRed'>2</div>
        <div className='flex flex-col font-bold'>
          <div>Courses</div>
          <div>in progress</div>
        </div>
      </div>
    </div>
  );
};
export default ProgressModule;
