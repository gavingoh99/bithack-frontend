// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AptitudeModule: FC = () => {
  return (
    <div className='row-start-4 row-end-6 flex h-full w-full flex-col'>
      <div className='text-xl font-bold'>Technical Aptitude</div>
      <div className='mt-2 flex flex-1 justify-evenly rounded-xl bg-lightGray p-5'>
        <div className='flex flex-col justify-center'>
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: '#bf8d8d',
                textColor: '#bf8d8d',
              })}
              value={70}
              text={7}
            />
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='text-xl font-bold'>How to improve?</div>
          <div>Take up recommended online courses!</div>
          <div>Look into pursuing higher education!</div>
          <div className='mt-5 flex items-center gap-5'>
            <span>Think you've gotten better?</span>
            <button className='rounded-xl bg-powderRed p-2 text-lightGray'>
              Reattempt now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AptitudeModule;
