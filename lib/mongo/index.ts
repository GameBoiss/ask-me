import { MongoClient } from 'mongodb';

const URI = process.env.MONGO_URI;
const options = {};

if (!URI) throw new Error('Please add your Mongo URI');

const client = new MongoClient(URI, options);
let clientPromise: any;

if (process.env.NODE_ENV !== 'production') {
  if (!global.mongoClientPromise) {
    global.mongoClientPromise = client.connect();
  }

  clientPromise = global.mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;
