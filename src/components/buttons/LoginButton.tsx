// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

type LoginButtonProps = {
  target: string;
  isSelected: boolean;
  setSelected: (target: string) => void;
};

const LoginButton: FC<LoginButtonProps> = ({
  target,
  isSelected,
  setSelected,
}) => {
  return (
    <button
      onClick={() => setSelected(target)}
      className={`rounded-3xl border border-gray pt-2 pb-2 pl-5 pr-5 ${
        isSelected ? 'bg-gray text-lightBeige' : 'text-gray'
      }`}
    >
      continue as {target}
    </button>
  );
};

export default LoginButton;
