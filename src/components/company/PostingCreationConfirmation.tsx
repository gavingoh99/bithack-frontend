// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

const PostingCreationConfirmation: FC = () => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center'>
      <div className='text-xl font-bold'>
        Your posting has been created successfully.
      </div>
      <div className='text-center text-xs '>
        Check back in a few minutes to view recommended profiles that match your
        posting requirements!
      </div>
    </div>
  );
};
export default PostingCreationConfirmation;
