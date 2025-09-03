import clientPromise from "./mongodb";

export async function saveRSVP(data: {
  name: string;
  email: string;
  guests: number;
  message?: string;
}) {
  const client = await clientPromise;
  const db = client.db("FelixAndSuccessWedding"); // make sure db name matches your setup
  const collection = db.collection("rsvps");

  const result = await collection.insertOne({
    ...data,
    createdAt: new Date(),
  });

  return result;
}
