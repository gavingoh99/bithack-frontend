// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC, useContext } from 'react';
import { AppContext } from '@/pages/_app';

const Greeting: FC = () => {
  const { user } = useContext(AppContext);
  return <div>Welcome, {user}</div>;
};
export default Greeting;
