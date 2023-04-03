import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { buildSchema } from 'type-graphql';
import DogsResolver from '@/schema/dogs.resolver';

const schema = await buildSchema({
  resolvers: [DogsResolver],
});

const server = new ApolloServer({
  schema,
  cache: 'bounded',
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com',
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}
