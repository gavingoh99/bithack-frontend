// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

type YOEBubbleProps = {
  yoe: string;
  setSelectedYOE: (yoe: string) => void;
  isSelected: boolean;
};
const YOEBubble: FC<YOEBubbleProps> = ({ yoe, isSelected, setSelectedYOE }) => {
  return (
    <div
      onClick={() => setSelectedYOE(yoe)}
      className={`rounded-3xl border border-black p-2 ${
        isSelected ? 'bg-black text-white' : ''
      }`}
    >
      {yoe}
    </div>
  );
};
export default YOEBubble;
