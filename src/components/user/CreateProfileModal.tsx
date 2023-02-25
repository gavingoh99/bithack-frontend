// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC, useContext, useState } from 'react';
import Image from 'next/image';
import userImage from '../../../public/images/user.png';
import { AppContext } from '@/pages/_app';
import CreateProfileCircle from './CreateProfileCircle';
import BasicInfo from './BasicInfo';
import AdvancedInfo from './AdvancedInfo';
import ProfileCreationConfirmation from './ProfileCreationConfirmation';
import AptitudeAssessment from './AptitudeAssessment';

const CreateProfileModal: FC = () => {
  const yoes = ['< 2 years', '2 - 4 years', '5 - 7 years', '> 7 years'];
  const cultures = ['collaborative', 'competitive', 'nurturing'];
  const aptitudes = ['1 - 3', '4 - 5', '6 - 7', '8 - 10'];
  const { user, setApplication, modalOpen, setModalOpen } =
    useContext(AppContext);
  const [creationStage, setCreationStage] = useState(1);
  const [yoe, setYOE] = useState(0);
  const [culture, setCulture] = useState(0);
  const [aptitude, setAptitude] = useState(0);
  const [applicantSkills, setApplicantSkills] = useState([]);
  const [name, setName] = useState('');
  const resetForm = () => {
    setYOE(0);
    setCulture(0);
    setAptitude(0);
    setApplicantSkills([]);
    setName('');
  };
  const handleCreateProfile = async () => {
    let response = await fetch(
      'https://bithack-backend.onrender.com/applicants',
      {
        method: 'POST',
        body: JSON.stringify({
          yoe: yoe,
          applicant_skills: applicantSkills.join(', '),
          username: user,
        }),
      }
    );
    response = await response.json();
    const applicantId = response['applicant_id'];
    setApplication(applicantId);
    resetForm();
    setCreationStage(4);
  };
  return (
    <div
      className={`${
        modalOpen == 4 ? '' : 'hidden'
      } absolute top-1/2 left-1/2 z-10 flex h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 transform `}
    >
      <div className='flex flex-2 items-center justify-center rounded-tl-xl rounded-bl-xl bg-powderRed p-10'>
        <Image src={userImage} alt='general image' />
      </div>
      <div className='flex flex-3 flex-col  rounded-tr-xl rounded-br-xl bg-lightBeige  p-10'>
        <div
          className={`${
            creationStage != 0 && 'cursor-pointer'
          } flex w-full justify-between text-xs font-bold`}
        >
          <CreateProfileCircle
            stage={1}
            description='Basic Info'
            isFocus={creationStage == 1}
            setCreationStage={setCreationStage}
          />
          <CreateProfileCircle
            stage={2}
            description='Advanced'
            isFocus={creationStage == 2}
            setCreationStage={setCreationStage}
          />
          <CreateProfileCircle
            stage={3}
            description='Aptitude Assessment'
            isFocus={creationStage == 3}
            setCreationStage={setCreationStage}
          />
          <CreateProfileCircle
            stage={4}
            description='Profile Creation'
            isFocus={creationStage == 4}
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
            name={name}
            setName={setName}
          />
        ) : creationStage == 2 ? (
          <AdvancedInfo
            aptitudes={aptitudes}
            aptitude={aptitude}
            setAptitude={setAptitude}
            applicantSkills={applicantSkills}
            setApplicantSkills={setApplicantSkills}
          />
        ) : creationStage == 3 ? (
          <AptitudeAssessment />
        ) : (
          <ProfileCreationConfirmation />
        )}
        <div className='flex items-center self-end text-xl font-bold'>
          <button
            onClick={() => {
              if (creationStage == 1 || creationStage == 2) {
                setCreationStage((prev) => prev + 1);
              } else if (creationStage == 3) {
                handleCreateProfile();
              } else {
                setModalOpen(0);
                setCreationStage(1);
              }
            }}
          >
            continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateProfileModal;
