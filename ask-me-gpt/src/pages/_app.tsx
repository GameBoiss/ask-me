import '@/styles/globals.sass';
import type { AppProps } from 'next/app';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const testAutoPrettier = "test"
  // after user runs git add and git commit pre-commit should be triggered and auto fix anything it can
  const testAutoFix = "test2"
  return <Component {...pageProps} />;
}
