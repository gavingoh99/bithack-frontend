// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import company from '../../../public/images/company.png';
import { AppContext } from '@/pages/_app';

const ApplicantRecommendationsModal: FC = () => {
  const { currPosting, modalOpen, setModalOpen } = useContext(AppContext);
  const [suitableCandidates, setSuitableCandidates] = useState([]);
  useEffect(() => {
    if (currPosting != undefined) {
      setSuitableCandidates(currPosting['suitable_candidates']);
    }
  }, [currPosting]);
  return (
    <div
      className={`${
        modalOpen == 5 ? '' : 'hidden'
      } absolute top-1/2 left-1/2 z-10 flex h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 transform `}
    >
      <div className='flex flex-2 items-center justify-center rounded-tl-xl rounded-bl-xl bg-powderRed p-10'>
        <Image src={company} alt='general image' />
      </div>
      <div className='flex flex-3 flex-col items-center gap-5  overflow-y-scroll rounded-tr-xl rounded-br-xl bg-lightBeige p-10'>
        <div className='text-xl font-bold'>
          {currPosting != undefined && currPosting['job_title']}
        </div>
        {suitableCandidates?.map((candidate, index) => (
          <div
            key={index}
            className='flex w-full flex-col gap-5 rounded-xl border border-gray p-5'
          >
            <div className='font-bold'>Applicant #{index + 1}</div>
            <div className='flex w-full justify-between  '>
              <div className='h-16 w-16 bg-lightGray'></div>
              <div className='w-2/3 flex-col'>
                <div className='flex items-center justify-between'>
                  <div className='font-bold'>skillset:</div>
                  <div className='text-center'>
                    {candidate['applicant_skills']}
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='font-bold'>years of experience:</div>
                  <div>{candidate['yoe']}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ApplicantRecommendationsModal;
