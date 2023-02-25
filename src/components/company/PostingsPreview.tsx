// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';
import PostingPreview from './PostingPreview';

const PostingsPreview: FC = ({ postings }) => {
  return (
    <div className='row-start-3 row-end-7 flex h-full w-full flex-col '>
      <div className='text-xl font-bold'>Postings</div>
      <div className='mt-2 mb-2 flex gap-16'>
        <div className='font-bold'>Full Time Postings</div>
        <div className='font-bold text-lightGray'>Freelance Postings</div>
      </div>
      <div className='flex flex-1 flex-col gap-5 overflow-y-scroll'>
        {postings.map((posting, index) => (
          <PostingPreview key={index} posting={posting} />
        ))}
      </div>
    </div>
  );
};
export default PostingsPreview;
