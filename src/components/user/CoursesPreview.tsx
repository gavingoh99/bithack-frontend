// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';
import CoursePreview from './CoursePreview';

const CoursesPreview: FC = () => {
  return (
    <div className='row-start-3 row-end-7 h-full w-full '>
      <div className='text-xl font-bold'>Courses</div>
      <div className='mt-2 mb-2 flex gap-16'>
        <div className='font-bold'>Online Courses</div>
        <div className='font-bold text-lightGray'>Formal Courses</div>
      </div>

      <div className='flex flex-col gap-5'>
        <CoursePreview />
        <CoursePreview />
        <CoursePreview />
      </div>
    </div>
  );
};
export default CoursesPreview;
