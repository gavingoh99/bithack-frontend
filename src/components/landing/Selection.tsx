// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

type SelectionProps = {
  setRegistrationStage: (stage: number) => void;
};
const Selection: FC<SelectionProps> = ({ setRegistrationStage }) => {
  return (
    <div className='flex w-full flex-1 flex-col items-center justify-center gap-10'>
      <div
        onClick={() => {
          setRegistrationStage(1);
        }}
        className='w-1/2 cursor-pointer rounded-full border border-gray p-2 text-center'
      >
        continue as company
      </div>
      <div
        onClick={() => setRegistrationStage(2)}
        className='w-1/2 cursor-pointer rounded-full border border-gray p-2 text-center'
      >
        continue as user
      </div>
    </div>
  );
};
export default Selection;
