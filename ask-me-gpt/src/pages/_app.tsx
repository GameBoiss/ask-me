import '@/styles/globals.sass';
import type { AppProps } from 'next/app';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const testAutoPrettier = "test"
  return <Component {...pageProps} />;
}
