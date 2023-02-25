// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

const ProfileCreationConfirmation: FC = () => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center'>
      <div className='text-xl font-bold'>
        Your profile has been created successfully.
      </div>
      <div className='text-center text-xs '>
        Start exploring our many features now!
      </div>
    </div>
  );
};
export default ProfileCreationConfirmation;
