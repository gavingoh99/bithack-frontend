// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';
import Link from 'next/link';

const RedirectToCreateButton: FC = () => {
  return (
    <Link
      href='/company/createposting'
      className='w-fit self-center rounded-3xl border border-black pt-2 pb-2 pl-5 pr-5'
    >
      Create Posting
    </Link>
  );
};
export default RedirectToCreateButton;
