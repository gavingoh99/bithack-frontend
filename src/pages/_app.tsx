// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { AppProps } from 'next/app';
import NavBar from '@/components/NavBar';
import { createContext, useState } from 'react';

import '@/styles/globals.css';
import Layout from '@/components/layout/Layout';
import Overlay from '@/components/Overlay';

export const AppContext = createContext<AppContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState('');
  const [application, setApplication] = useState('');
  const [postings, setPostings] = useState([]);
  const [modalOpen, setModalOpen] = useState(0);
  const appState = {
    user: user,
    setUser: setUser,
    application: application,
    setApplication: setApplication,
    postings: postings,
    setPostings: setPostings,
    modalOpen: modalOpen,
    setModalOpen: setModalOpen,
  };
  return (
    <Layout>
      <AppContext.Provider value={appState as AppContext}>
        <NavBar />
        <Overlay modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <Component {...pageProps} />
      </AppContext.Provider>
    </Layout>
  );
}

export default MyApp;
