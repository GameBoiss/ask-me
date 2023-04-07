import { Resolver, Query, Arg } from 'type-graphql';
import getdogs from '@lib/mongo/dogs';
import { Dog } from './dogs';

@Resolver(Dog)
export default class DogsResolver {
  @Query(() => Dog, { nullable: true })
  async dog(@Arg('name', () => String) name: string) {
    try {
      const { dogs, error } = await getdogs();
      if (error) {
        throw new Error(error);
      }
      const dog = dogs.find((dog: { name: string }) => dog.name === name);
      if (dog === undefined) {
        throw new Error('Dog not found');
      }
      return dog;
    } catch (error: any) {
      console.log('Error!!', error);
      return { error: 'Failed to query for dog' };
    }
  }

  @Query(() => [Dog])
  async dogs() {
    try {
      const { dogs, error } = await getdogs();
      if (error) {
        throw new Error(error);
      }
      return dogs;
    } catch (error: any) {
      console.log('Error!!', error);
      return { error: 'Failed to query for dogs' };
    }
  }
}
