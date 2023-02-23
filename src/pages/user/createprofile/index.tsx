import * as React from 'react';
import Layout from '@/components/layout/Layout';
import CreateProfileForm from '@/components/createprofile/CreateProfileForm';

export default function UserCreateProfilePage() {
  return (
    <Layout>
      <div className='p-10'>
        <div className='text-3xl font-bold'>just a few more details</div>
        <CreateProfileForm />
      </div>
    </Layout>
  );
}
