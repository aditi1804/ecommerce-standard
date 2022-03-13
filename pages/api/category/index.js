import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("Ecommerce");
    switch (req.method) {
      case "POST":
        let bodyObject = JSON.parse(req.body);
        let newPost = await db.collection("Category").insertOne(bodyObject);
        res.json(newPost);
        break;
      case "GET":
        const posts = await db.collection("Category").find({}).toArray();
        res.json({ status: 200, data: posts });
        break;
    }
  }