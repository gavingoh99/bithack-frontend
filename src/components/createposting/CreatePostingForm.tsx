// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC, useState } from 'react';

const CreatePostingForm: FC = () => {
  const [jobTitle, setJobTitle] = useState();
  const [jobDescription, setJobDescription] = useState();
  const [currSkill, setCurrSkill] = useState();
  const [postingSkills, setPostingSkills] = useState([]);
  return (
    <div className='flex h-full flex-col gap-16 pt-10 pl-20 pr-20 text-xl '>
      <div className='flex items-center gap-10'>
        <div className='font-bold'>job title</div>
        <input
          className='w-1/3 rounded-3xl border border-black p-2'
          onChange={(event) => setJobTitle(event.target.value)}
          value={jobTitle}
        />
      </div>
      <div>
        <div className='mb-5 font-bold'>job description</div>
        <textarea
          className='w-full resize-none'
          onChange={(event) => setJobDescription(event.target.value)}
          value={jobDescription}
        />
      </div>
      <div>
        <div className='mb-5 font-bold'>required skills</div>
        <div className='flex flex-col  gap-5'>
          <div className='flex gap-10'>
            {postingSkills.map((skill, index) => (
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
                setPostingSkills((prev) => [...prev, currSkill]);
                setCurrSkill('');
              }}
            >
              add skill
            </button>
          </div>
        </div>
      </div>
      <button className='font-bold'>create posting</button>
    </div>
  );
};
export default CreatePostingForm;
