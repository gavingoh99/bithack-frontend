import * as React from 'react';
import Layout from '@/components/layout/Layout';
import CreatePostingForm from '@/components/createposting/CreatePostingForm';

export default function CompanyCreatePostingPage() {
  return (
    <Layout>
      <div className='p-10'>
        <div className='text-3xl font-bold'>create new posting</div>
        <CreatePostingForm />
      </div>
    </Layout>
  );
}
