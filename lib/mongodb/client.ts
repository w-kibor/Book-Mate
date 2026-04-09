import { MongoClient, type Db } from 'mongodb';

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const dbName = process.env.MONGODB_DB_NAME || 'book_mate';

let clientPromise: Promise<MongoClient>;

function toPositiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function getMongoUri(): string {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable.');
  }

  return uri;
}

function createMongoClient(): MongoClient {
  const ipFamily = process.env.MONGODB_IP_FAMILY === '6' ? 6 : 4;

  return new MongoClient(getMongoUri(), {
    // Prefer IPv4 by default to avoid ENETUNREACH on networks without IPv6 routing.
    family: ipFamily,
    connectTimeoutMS: toPositiveInt(process.env.MONGODB_CONNECT_TIMEOUT_MS, 10000),
    serverSelectionTimeoutMS: toPositiveInt(
      process.env.MONGODB_SERVER_SELECTION_TIMEOUT_MS,
      15000
    ),
  });
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    const client = createMongoClient();
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  const client = createMongoClient();
  clientPromise = client.connect();
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db(dbName);
}
