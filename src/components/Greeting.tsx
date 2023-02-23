import { AppContext } from '@/pages/_app';
import { FC, useContext } from 'react';

const Greeting: FC = () => {
  const { user } = useContext(AppContext);
  return <div>Welcome, {user}</div>;
};
export default Greeting;
