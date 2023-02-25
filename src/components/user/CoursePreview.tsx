// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

type CoursePreviewProps = {
  course: string;
};
const CoursePreview: FC<CoursePreviewProps> = ({ course }) => {
  return (
    <div className='flex items-center justify-between rounded-xl bg-lightGray p-8 font-bold'>
      <div className='flex items-center gap-10'>
        <div className='rounded bg-lightBeige p-6'></div>
        <div>{course}</div>
      </div>
      <button className='rounded bg-lightBeige p-2'>View Course</button>
    </div>
  );
};
export default CoursePreview;
