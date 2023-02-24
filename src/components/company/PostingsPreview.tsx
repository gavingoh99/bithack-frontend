// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';
import PostingPreview from './PostingPreview';

const PostingsPreview: FC = () => {
  return (
    <div className='row-start-3 row-end-7 h-full w-full '>
      <div className='text-xl font-bold'>Postings</div>
      <div className='mt-2 mb-2 flex gap-16'>
        <div className='font-bold'>Full Time Postings</div>
        <div className='font-bold text-lightGray'>Freelance Postings</div>
      </div>
      <div className='flex flex-col gap-5'>
        <PostingPreview />
        <PostingPreview />
        <PostingPreview />
      </div>
    </div>
  );
};
export default PostingsPreview;
