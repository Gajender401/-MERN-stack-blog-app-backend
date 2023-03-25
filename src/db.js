import { MongoClient,ServerApiVersion } from 'mongodb';

let db;

async function connectToDb(cb) {
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.vs4wemw.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
     db = client.db('blog-app');

    cb();
}

export {
    db,
    connectToDb,
};