// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC, useState } from 'react';

type AdvancedInfoProps = {
  aptitudes: string[];
  aptitude: number;
  setAptitude: (aptitude: number) => void;
  postingSkills: string[];
  setPostingSkills: (postingSkills: string[]) => void;
};
const AdvancedInfo: FC<AdvancedInfoProps> = ({
  aptitudes,
  aptitude,
  setAptitude,
  postingSkills,
  setPostingSkills,
}) => {
  const [currSkill, setCurrSkill] = useState('');
  const handleAddSkill = () => {
    setPostingSkills((prev) => [...prev, currSkill]);
    setCurrSkill('');
  };
  return (
    <div className='flex flex-1 flex-col justify-evenly'>
      <div className='mt-5 flex flex-1 flex-col'>
        <div className='font-bold'>talent requirements</div>
        {postingSkills.map((skill, index) => (
          <div className='text-powderRed' key={index}>
            {skill}
          </div>
        ))}
        <div className='flex items-center gap-2'>
          <input
            value={currSkill}
            onChange={(event) => setCurrSkill(event.target.value)}
            className='flex-1'
          />
          <div
            onClick={() => handleAddSkill()}
            className='w-fit border border-gray pl-2 pr-2 text-center font-bold'
          >
            add skill
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='font-bold'>desired technical aptitude range</div>
        <div className='flex justify-between'>
          {aptitudes.map((currAptitude, index) => (
            <div
              key={index}
              onClick={() => setAptitude(index)}
              className={`cursor-pointer p-2 ${
                index == aptitude ? 'rounded-full border border-gray' : ''
              }`}
            >
              {currAptitude}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AdvancedInfo;
