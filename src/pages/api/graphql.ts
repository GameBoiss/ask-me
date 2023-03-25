import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
// import { MicroRequest } from 'apollo-server-micro/dist/types';
// import { ServerResponse, IncomingMessage } from 'http';
import {
  buildSchema,
  Resolver,
  Query,
  ObjectType,
  Field,
  ID,
} from 'type-graphql';

@ObjectType()
export class Dog {
  @Field(() => ID)
  name: string | undefined;
}

@Resolver(Dog)
export class DogsResolver {
  @Query(() => [Dog])
  dogs(): Dog[] {
    return [{ name: 'Bo' }, { name: 'Lassie' }];
  }
}

const schema = await buildSchema({
  resolvers: [DogsResolver],
});

const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(req: any, res: any) {
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}
