// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

type BasicInfoProps = {
  name: string;
  setName: (name: string) => void;
  yoes: string[];
  cultures: string[];
  yoe: number;
  setYOE: (yoe: number) => void;
  culture: number;
  setCulture: (culture: number) => void;
};
const BasicInfo: FC<BasicInfoProps> = ({
  yoes,
  cultures,
  yoe,
  setYOE,
  culture,
  setCulture,
  name,
  setName,
}) => {
  return (
    <div className='flex flex-1 flex-col justify-evenly'>
      <div className='flex flex-col'>
        <div className='font-bold'>name</div>
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div className='flex flex-col'>
        <div className='font-bold'>years of experience</div>
        <div className='flex justify-between'>
          {yoes.map((currYOE, index) => (
            <div
              key={index}
              onClick={() => setYOE(index)}
              className={`cursor-pointer p-2 ${
                index == yoe ? 'rounded-full border border-gray ' : ''
              }`}
            >
              {currYOE}
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='font-bold'>preferred company culture</div>
        <div className='flex justify-between'>
          {cultures.map((currCulture, index) => (
            <div
              key={index}
              onClick={() => setCulture(index)}
              className={`cursor-pointer p-2 ${
                index == culture ? 'rounded-full border border-gray' : ''
              }`}
            >
              {currCulture}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BasicInfo;
