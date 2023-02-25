// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Statistics: FC = () => {
  return (
    <div className='row-start-2 row-end-6 flex h-full w-full flex-col'>
      <div className='text-xl font-bold'>Your statistics</div>
      <div className='mt-2 flex flex-1 gap-5 rounded-xl bg-lightGray p-16'>
        <div className='flex flex-col items-center'>
          <div className='mb-6 text-xl font-bold'>
            Successful Recommendations
          </div>
          <div style={{ height: 200, width: 200 }}>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: '#bf8b8b',
                textColor: '#bf8b8b',
                textSize: '10px',
              })}
              value={67}
              text={'22 out of 30'}
            />
          </div>
        </div>
        <div className='flex flex-col justify-evenly'>
          <div className='font-bold'>
            <div className='text-lg'>Weekly Viewership</div>
            <div className='text-powderRed'>78,000</div>
          </div>
          <div className='font-bold'>
            <div className='text-lg'>Most Viewed Posting</div>
            <div className='text-powderRed'>Fullstack Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
