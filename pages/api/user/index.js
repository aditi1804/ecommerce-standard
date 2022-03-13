import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("Ecommerce");
    switch (req.method) {
      case "POST":
        let bodyObject = JSON.parse(req.body);
        let newPost = await db.collection("Users").find({user:req.body.username});
        res.json(newPost);
        break;
    }
  }