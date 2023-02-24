// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';

type CredentialsProps = {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
};
const Credentials: FC<CredentialsProps> = ({
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <div className='flex w-full flex-1 flex-col justify-center gap-10'>
      <div className='flex w-full items-center gap-5 font-bold'>
        <div>username:</div>
        <input
          onChange={(event) => setUsername(event.target.value)}
          value={username}
          className='flex-1 border'
        />
      </div>
      <div className='flex w-full items-center gap-5 font-bold'>
        <div>password:</div>
        <input
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          type='password'
          className='flex-1'
        />
      </div>
    </div>
  );
};

export default Credentials;
