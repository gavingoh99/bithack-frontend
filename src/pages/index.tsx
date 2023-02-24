// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import LoginModal from '@/components/landing/LoginModal';
import SignUpModal from '@/components/landing/SignUpModal';
import Layout from '@/components/layout/Layout';

export default function HomePage() {
  return (
    <Layout>
      <div>
        <SignUpModal />
        <LoginModal />
      </div>
    </Layout>
  );
}
