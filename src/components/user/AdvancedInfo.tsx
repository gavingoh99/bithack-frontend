// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC, useState } from 'react';

type AdvancedInfoProps = {
  aptitudes: string[];
  aptitude: number;
  setAptitude: (aptitude: number) => void;
  applicantSkills: string[];
  setApplicantSkills: (postingSkills: string[]) => void;
};
const AdvancedInfo: FC<AdvancedInfoProps> = ({
  applicantSkills,
  setApplicantSkills,
}) => {
  const [newSkills, setNewSkills] = useState([]);
  const [currSkill, setCurrSkill] = useState('');
  const [currNewSkill, setCurrNewSkill] = useState('');
  const handleAddSkill = () => {
    setApplicantSkills((prev) => [...prev, currSkill]);
    setCurrSkill('');
  };
  const handleAddNewSkill = () => {
    setNewSkills((prev) => [...prev, currNewSkill]);
    setCurrNewSkill('');
  };
  return (
    <div className='flex flex-1 flex-col justify-evenly'>
      <div className='mt-5 flex flex-1 flex-col'>
        <div className='font-bold'>your skills</div>
        {applicantSkills.map((skill, index) => (
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
      <div className='mt-5 flex flex-1 flex-col'>
        <div className='font-bold'>skills you'd like to pick up</div>
        {newSkills.map((skill, index) => (
          <div className='text-powderRed' key={index}>
            {skill}
          </div>
        ))}
        <div className='flex items-center gap-2'>
          <input
            value={currNewSkill}
            onChange={(event) => setCurrNewSkill(event.target.value)}
            className='flex-1'
          />
          <div
            onClick={() => handleAddNewSkill()}
            className='w-fit border border-gray pl-2 pr-2 text-center font-bold'
          >
            add skill
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdvancedInfo;
