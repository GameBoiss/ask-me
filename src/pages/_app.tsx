import '@/styles/globals.sass';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const test2 = "blah";
  return <Component {...pageProps} />;
}
