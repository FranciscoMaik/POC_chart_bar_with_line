import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../../GlobalStyled';

const MyApp: React.FC<AppProps> = function ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
