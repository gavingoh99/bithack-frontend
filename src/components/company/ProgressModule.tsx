// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

const ProgressModule: FC = () => {
  return (
    <div className='row-start-1 row-end-2 flex h-full w-full gap-5 '>
      <div className='flex flex-1 items-center justify-center gap-5 rounded-xl bg-lightGray'>
        <div className='text-5xl font-bold text-powderRed'>11</div>
        <div className='flex flex-col font-bold'>
          <div>Postings</div>
          <div>matched</div>
        </div>
      </div>
      <div className='flex flex-1 items-center justify-center gap-5 rounded-xl bg-lightGray'>
        <div className='text-5xl font-bold text-powderRed'>4</div>
        <div className='flex flex-col font-bold'>
          <div>Postings</div>
          <div>outstanding</div>
        </div>
      </div>
    </div>
  );
};
export default ProgressModule;
