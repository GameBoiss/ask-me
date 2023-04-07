import clientPromise from '.';

let client;
let db: any;
let dogs: any;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db('adoptableDog');
    dogs = await db.collection('dogs');
  } catch (error) {
    throw new Error('Failed to establish connection to database');
  }
}

(async () => {
  await init();
})();

export default async function getdogs() {
  try {
    if (!dogs) await init();
    const result = await dogs
      .find({})
      .limit(20)
      .map((user: any) => ({
        ...user,
        id: user._id.toString(),
      }))
      .toArray();

    return { dogs: result };
  } catch (error) {
    return { error: 'Failed to fetch dogs!' };
  }
}
