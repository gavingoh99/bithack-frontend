// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

type CreatePostCircleProps = {
  stage: number;
  description: string;
  isFocus: boolean;
  setCreationStage: (stage: number) => void;
};
const CreatePostCircle: FC<CreatePostCircleProps> = ({
  stage,
  description,
  isFocus,
  setCreationStage,
}) => {
  return (
    <div className='flex flex-col items-center'>
      <div
        onClick={() => stage != 3 && setCreationStage(stage)}
        className={`mb-2 flex h-8 w-8 items-center justify-center rounded-full border border-gray text-center text-gray ${
          isFocus ? 'bg-gray text-lightBeige' : ''
        }`}
      >
        <div>{stage}</div>
      </div>
      <div>{description}</div>
    </div>
  );
};
export default CreatePostCircle;
