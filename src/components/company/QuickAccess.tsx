// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { AppContext } from '@/pages/_app';
import { FC, useContext } from 'react';

const QuickAccess: FC = () => {
  const { setModalOpen } = useContext(AppContext);
  return (
    <div className='row-start-6 row-end-7 h-full w-full'>
      <div className='flex h-full gap-5'>
        <div
          onClick={() => setModalOpen(3)}
          className='flex flex-1 cursor-pointer items-center justify-center rounded-xl bg-lightGray text-xl font-bold'
        >
          <div>Create Posting</div>
        </div>
        <div className='flex flex-1 items-center justify-center rounded-xl bg-lightGray text-xl font-bold'>
          <div>Finetune Algorithm</div>
        </div>
      </div>
    </div>
  );
};
export default QuickAccess;
