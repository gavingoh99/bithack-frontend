import { AppProps } from 'next/app';
import NavBar from '@/components/NavBar';
import { createContext, useState } from 'react';

import '@/styles/globals.css';
import Layout from '@/components/layout/Layout';

export const AppContext = createContext({
  user: '',
  setUser: () => null,
  application: '',
  setApplication: () => null,
  postings: [],
  setPostings: () => null,
});

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
      <AppContext.Provider value={appState}>
        <NavBar />
        <Component {...pageProps} />
      </AppContext.Provider>
    </Layout>
  );
}

export default MyApp;
