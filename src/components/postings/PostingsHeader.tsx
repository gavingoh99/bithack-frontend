// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

const PostingsHeader: FC = () => {
  return (
    <div className='flex text-xl font-bold'>
      <div className='flex-1'>job title</div>
      <div className='flex-1'>suitable candidates found</div>
    </div>
  );
};

export default PostingsHeader;
