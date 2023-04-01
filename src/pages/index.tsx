// import Head from 'next/head';
// import Image from 'next/image';
// import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.sass';
import { dehydrate, useQuery } from 'react-query';
import Link from 'next/link';
import { Grid, Card, Image, Text, Title } from '@mantine/core';
import { queryClient, getDogs } from '../api';

export async function getServerSideProps() {
  await queryClient.prefetchQuery('dogs', () => getDogs());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data } = useQuery(['dogs'], () => getDogs());

  return (
    <div>
      <Grid>
        {data?.dogs.map((f, i) => (
          <Grid.Col xs={12} md={6} lg={4} key={[f.name, i].join(':')} p={5}>
            <Link href={`/dog/${f.name}`} passHref>
              <Card>
                <Card.Section>
                  <Image height={350} src={f.image} alt='green iguana' />
                </Card.Section>
                <Title order={3}>{f.name}</Title>
                <Text>
                  {f.weight} pound {f.ageInWeeks} weeks old{' '}
                  {f.sex.toLowerCase()} {f.breed.toLowerCase()}
                </Text>
              </Card>
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}
