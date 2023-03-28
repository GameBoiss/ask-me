// import Head from 'next/head';
// import Image from 'next/image';
import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.sass';
import {dehydrate, useQuery} from "react-query";
import {queryClient, getDogs} from "../api";

const inter = Inter({ subsets: ['latin'] });

export async function getServerSideProps() {
  await queryClient.prefetchQuery("dogs", () => getDogs());

  return {
    props: {  
       dehydratedState: dehydrate(queryClient), 
    },
  };
}

export default function Home() {
  const {data} = useQuery(["dogs"], () => getDogs());

  return <div>{JSON.stringify(data)}</div>;
}
