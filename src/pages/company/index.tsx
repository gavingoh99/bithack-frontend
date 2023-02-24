// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Dashboard from '@/components/company/Dashboard';

export default function CompanyPage() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}
