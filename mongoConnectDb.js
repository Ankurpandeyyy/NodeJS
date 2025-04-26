const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'ecom';
const client = new MongoClient(url);

async function connectDB()
{
    await client.connect();
    let db = client.db(database); 
    return db.collection('products');
}

module.exports=connectDB ;