import * as React from 'react';
import Layout from '@/components/layout/Layout';
import PostingsHeader from '@/components/postings/PostingsHeader';
import Posting from '@/components/postings/Posting';
import RedirectToCreateButton from '@/components/buttons/RedirectToCreateButton';
import { AppContext } from '@/pages/_app';

export default function CompanyPostingsPage() {
  const { postings } = React.useContext(AppContext);
  return (
    <Layout>
      <div className='p-10'>
        <div className='text-3xl font-bold'>Your Postings</div>
        <div className='mt-10 flex flex-col gap-10 rounded-3xl border border-black p-10'>
          <PostingsHeader />
          <hr />
          {postings.map((posting, index) => (
            <Posting
              key={index}
              jobTitle={posting['job_title']}
              numCandidates={posting['suitable_candidates'].length}
            />
          ))}
          <RedirectToCreateButton />
        </div>
      </div>
    </Layout>
  );
}
