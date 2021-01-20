var MongoClient = require("mongodb");
const uri =
  "mongodb+srv://jeanporcher:jeanporcher@cluster0.psurq.mongodb.net/hotspotParis";

async function Connection(uri) {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  return await client;
}

async function getAllHotspots(dbName, collectionName) {
  return Connection(uri).then(async (client) => {
    return client.db(dbName).collection(collectionName).find().toArray();
  });
}

module.exports = {
  getAllHotspots,
};
