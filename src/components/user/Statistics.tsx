// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

const Statistics: FC = () => {
  return (
    <div className='row-start-2 row-end-4 flex h-full w-full flex-col'>
      <div className='text-xl font-bold'>Skills-in-Demand</div>
      <div className='mt-2 flex flex-1 gap-2 rounded-xl bg-lightGray p-5'>
        <div className='flex flex-1 justify-center gap-2'>
          <div className='text-4xl font-bold text-powderRed'>01</div>
          <div>Version Control Systems</div>
        </div>
        <div className='flex flex-1 justify-center gap-2'>
          <div className='text-4xl font-bold text-powderRed'>02</div>
          <div>React</div>
        </div>
        <div className='flex flex-1 justify-center gap-2'>
          <div className='text-4xl font-bold text-powderRed'>03</div>
          <div>Javascript</div>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
