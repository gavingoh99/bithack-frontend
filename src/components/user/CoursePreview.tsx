// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

const CoursePreview: FC = () => {
  return (
    <div className='flex items-center justify-between rounded-xl bg-lightGray p-8 font-bold'>
      <div className='rounded bg-lightBeige p-6'></div>
      <div>
        <div>Harvard's CS50</div>
      </div>
      <button className='rounded bg-lightBeige p-2'>View Course</button>
    </div>
  );
};
export default CoursePreview;
