// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { AppContext } from '@/pages/_app';
import { useRouter } from 'next/router';
import { FC, useContext, useState } from 'react';
import YOEBubble from './YOEBubble';

const CreateProfileForm: FC = () => {
  const [currSkill, setCurrSkill] = useState();
  const [applicantSkills, setApplicantSkills] = useState([]);
  const [selectedYOE, setSelectedYOE] = useState('2 - 4 years');
  const { user, setApplication } = useContext(AppContext);
  const router = useRouter();
  const handleProfileCreation = async () => {
    const applicant_skills = applicantSkills.join(', ');
    let yoe;
    if (selectedYOE == '< 2 years') {
      yoe = 0;
    } else if (selectedYOE == '2 - 4 years') {
      yoe = 1;
    } else if (selectedYOE == '5 - 6 years') {
      yoe = 2;
    } else {
      yoe = 3;
    }
    let response = await fetch('http://localhost:5001/applicants', {
      method: 'POST',
      body: JSON.stringify({
        username: user,
        yoe: yoe,
        applicant_skills: applicant_skills,
      }),
    });
    response = await response.json();
    setApplication(response['applicant_id']);
    router.push('/user');
  };
  return (
    <div className='flex h-full flex-col gap-16 pt-10 pl-20 pr-20 text-xl '>
      <div className='flex flex-col gap-10'>
        <div className='font-bold'>years of experience</div>
        <div className='flex justify-between'>
          <YOEBubble
            yoe='< 2 years'
            isSelected={selectedYOE == '< 2 years'}
            setSelectedYOE={setSelectedYOE}
          />
          <YOEBubble
            yoe='2 - 4 years'
            isSelected={selectedYOE == '2 - 4 years'}
            setSelectedYOE={setSelectedYOE}
          />
          <YOEBubble
            yoe='5 - 7 years'
            isSelected={selectedYOE == '5 - 7 years'}
            setSelectedYOE={setSelectedYOE}
          />
          <YOEBubble
            yoe='> 7 years'
            isSelected={selectedYOE == '> 7 years'}
            setSelectedYOE={setSelectedYOE}
          />
        </div>
      </div>
      <div>
        <div className='mb-5 font-bold'>your skills</div>
        <div className='flex flex-col  gap-5'>
          <div className='flex gap-10'>
            {applicantSkills.map((skill, index) => (
              <div key={index} className='flex items-center gap-2'>
                <div>{skill}</div>
                <button className='rounded-full border border-black p-2'>
                  remove
                </button>
              </div>
            ))}
          </div>
          <div className='flex items-center gap-5'>
            <input
              className='rounded-3xl border border-black p-2'
              onChange={(event) => setCurrSkill(event.target.value)}
              value={currSkill}
            />
            <button
              className='rounded-3xl border border border-black p-2 font-bold'
              onClick={() => {
                setApplicantSkills((prev) => [...prev, currSkill]);
                setCurrSkill('');
              }}
            >
              add skill
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => handleProfileCreation()} className='font-bold'>
        confirm details
      </button>
    </div>
  );
};
export default CreateProfileForm;
