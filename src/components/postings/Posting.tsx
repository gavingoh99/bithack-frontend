// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

type PostingProps = {
  jobTitle: string;
  numCandidates: number;
};

const Posting: FC<PostingProps> = ({ jobTitle, numCandidates }) => {
  return (
    <div className='flex text-lg'>
      <div className='flex-1'>{jobTitle}</div>
      <div className='flex-1'>{numCandidates}</div>
    </div>
  );
};
export default Posting;
