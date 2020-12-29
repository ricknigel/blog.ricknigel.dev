import React, { useEffect, Fragment } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Layout from '../src/components/Layout';
import Head from 'next/head';
import 'highlight.js/styles/nnfx-dark.css';

const App = ({ Component, pageProps }: AppProps) => {

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{'blog.ricknigel.dev'}</title>
      </Head>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </Fragment>
  );
};

export default App;
