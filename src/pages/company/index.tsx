// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function CompanyPage() {
  return (
    <Layout>
      <div className='p-10'>
        <div className='text-3xl font-bold'>Dashboard</div>
        <div className='mt-10 flex justify-between'>
          <Link
            href='/company/postings'
            className='w-fit rounded-3xl border border-black p-32 text-xl font-bold'
          >
            view postings
          </Link>
          <div className='w-fit rounded-3xl border border-black p-32 text-xl font-bold'>
            create posting
          </div>
          <div className='w-fit cursor-not-allowed rounded-3xl border border-black p-32 text-xl font-bold'>
            finetune algo
          </div>
        </div>
      </div>
    </Layout>
  );
}
