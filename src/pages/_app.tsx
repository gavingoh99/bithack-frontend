// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { AppProps } from 'next/app';
import NavBar from '@/components/NavBar';
import { createContext, useState } from 'react';

import '@/styles/globals.css';
import Layout from '@/components/layout/Layout';

export const AppContext = createContext<AppContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState('');
  const [application, setApplication] = useState('');
  const [postings, setPostings] = useState([]);
  const appState = {
    user: user,
    setUser: setUser,
    application: application,
    setApplication: setApplication,
    postings: postings,
    setPostings: setPostings,
  };
  return (
    <Layout>
      <AppContext.Provider value={appState as AppContext}>
        <NavBar />
        <Component {...pageProps} />
      </AppContext.Provider>
    </Layout>
  );
}

export default MyApp;
