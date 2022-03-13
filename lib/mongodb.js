const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ComosRocks:HeoqJATPVilIPKEb@cluster0.ubdxt.mongodb.net?retryWrites=true&w=majority";

let client
let clientPromise


if (!global._mongoClientPromise) {
  client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  global._mongoClientPromise = client.connect(
    )
}

clientPromise = global._mongoClientPromise

export default clientPromise