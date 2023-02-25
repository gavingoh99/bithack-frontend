// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { AppContext } from '@/pages/_app';
import { FC, useContext } from 'react';

const PostingPreview: FC<PostingProps> = ({ posting }) => {
  const { setCurrPosting, setModalOpen } = useContext(AppContext);
  return (
    <div className='flex items-center justify-between rounded-xl bg-lightGray p-8 font-bold'>
      <div className='flex items-center gap-10'>
        <div className='rounded bg-lightBeige p-6'></div>
        <div>{posting['job_title']}</div>
      </div>
      <button
        onClick={() => {
          setCurrPosting(posting);
          setModalOpen(5);
        }}
        className='rounded bg-lightBeige p-2'
      >
        View Posting
      </button>
    </div>
  );
};
export default PostingPreview;
