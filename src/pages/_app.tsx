import { AppProps } from 'next/app';
import NavBar from '@/components/NavBar';
import { createContext, useState } from 'react';

import '@/styles/globals.css';
import Layout from '@/components/layout/Layout';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

export const AppContext = createContext({});

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
