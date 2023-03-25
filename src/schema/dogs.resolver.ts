import { Resolver, Query } from 'type-graphql';
import { Dog } from './dogs.ts';
import dogs from './dogs.json';

@Resolver(Dog)
export default class DogsResolver {
  @Query(() => [Dog])
  dogs(): Dog[] {
    return dogs;
  }
}
