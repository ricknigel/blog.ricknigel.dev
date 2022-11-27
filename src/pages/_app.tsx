import React, { useEffect, Fragment } from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { EmotionCache } from '@emotion/react';

import Layout from 'components/Layout';
import createEmotionCache from 'modules/styles/createEmotionCache';
import 'modules/styles/github-markdown.css';
import 'highlight.js/styles/github.css';

const clientSideEmotionCache = createEmotionCache();
type Props = AppProps & {
  emotionCache?: EmotionCache;
};

const App = (props: Props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, router } = props;
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
