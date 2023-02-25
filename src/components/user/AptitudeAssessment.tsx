// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';
const AptitudeAssessment: FC = () => {
  return (
    <div className='flex flex-1 flex-col'>
      <div className='mt-10'>
        <div className='text-xl font-bold'>Just one last step.</div>
        <div className='text-xs'>
          Please complete the following assessment to enable us to gain a good
          grasp of where you stand.
        </div>
        <div className='mt-5 text-xs font-bold'>
          Based on your current skillset and interests:
        </div>
        <div className='flex items-center justify-between'>
          <div className='text-xs'>
            You have been assigned Assessment #23 (Shopee)
          </div>
          <button className='bg-gray pl-2 pr-2 text-xs font-bold text-lightBeige'>
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default AptitudeAssessment;
