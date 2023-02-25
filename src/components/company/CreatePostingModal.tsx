// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC, useContext, useState } from 'react';
import Image from 'next/image';
import company from '../../../public/images/company.png';
import { AppContext } from '@/pages/_app';
import CreatePostCircle from './CreatePostCircle';
import BasicInfo from './BasicInfo';
import AdvancedInfo from './AdvancedInfo';
import PostingCreationConfirmation from './PostingCreationConfirmation';

const CreatePostingModal: FC = () => {
  const yoes = ['< 2 years', '2 - 4 years', '5 - 7 years', '> 7 years'];
  const cultures = ['collaborative', 'competitive', 'nurturing'];
  const aptitudes = ['1 - 3', '4 - 5', '6 - 7', '8 - 10'];
  const { user, setPostings, modalOpen, setModalOpen } = useContext(AppContext);
  const [creationStage, setCreationStage] = useState(1);
  const [yoe, setYOE] = useState(0);
  const [culture, setCulture] = useState(0);
  const [aptitude, setAptitude] = useState(0);
  const [postingSkills, setPostingSkills] = useState([]);
  const [jobTitle, setJobTitle] = useState('');
  const resetForm = () => {
    setYOE(0);
    setCulture(0);
    setAptitude(0);
    setPostingSkills([]);
    setJobTitle('');
  };
  const handleCreatePosting = async () => {
    let response = await fetch(
      'https://bithack-backend.onrender.com/postings',
      {
        method: 'POST',
        body: JSON.stringify({
          job_title: jobTitle,
          posting_skills: postingSkills.join(', '),
          username: user,
        }),
      }
    );
    response = await response.json();
    const postingId = response['posting_id'];
    setPostings((prev) => [...prev, postingId]);
    resetForm();
    setCreationStage(3);
  };
  return (
    <div
      className={`${modalOpen == 3 ? '' : 'hidden'
        } absolute top-1/2 left-1/2 z-10 flex h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 transform `}
    >
      <div className='flex flex-2 items-center justify-center rounded-tl-xl rounded-bl-xl bg-powderRed p-10'>
        <Image src={company} alt='general image' />
      </div>
      <div className='flex flex-3 flex-col  rounded-tr-xl rounded-br-xl bg-lightBeige  p-10'>
        <div
          className={`${creationStage != 0 && 'cursor-pointer'
            } flex w-full justify-between text-xs font-bold`}
        >
          <CreatePostCircle
            stage={1}
            description='Basic Info'
            isFocus={creationStage == 1}
            setCreationStage={setCreationStage}
          />
          <CreatePostCircle
            stage={2}
            description='Advanced'
            isFocus={creationStage == 2}
            setCreationStage={setCreationStage}
          />
          <CreatePostCircle
            stage={3}
            description='Posting Creation'
            isFocus={creationStage == 3}
            setCreationStage={setCreationStage}
          />
        </div>
        {creationStage == 1 ? (
          <BasicInfo
            yoes={yoes}
            cultures={cultures}
            yoe={yoe}
            setYOE={setYOE}
            culture={culture}
            setCulture={setCulture}
            jobTitle={jobTitle}
            setJobTitle={setJobTitle}
          />
        ) : creationStage == 2 ? (
          <AdvancedInfo
            aptitudes={aptitudes}
            aptitude={aptitude}
            setAptitude={setAptitude}
            postingSkills={postingSkills}
            setPostingSkills={setPostingSkills}
          />
        ) : (
          <PostingCreationConfirmation />
        )}
        <div className='flex items-center self-end text-xl font-bold'>
          {creationStage == 1 ? (
            <button onClick={() => setCreationStage(2)}>continue</button>
          ) : creationStage == 2 ? (
            <button onClick={() => handleCreatePosting()}>continue</button>
          ) : (
            <button
              onClick={() => {
                setModalOpen(0);
                setCreationStage(1);
              }}
            >
              continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default CreatePostingModal;
