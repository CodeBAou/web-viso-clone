/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/semi */
import '../styles/global.css';
import React from 'react';
import type { AppProps } from 'next/app';

function MyApp ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps }/>;
}

// eslint-disable-next-line eol-last
export default MyApp;