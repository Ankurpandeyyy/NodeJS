const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'ecom';
const client = new MongoClient(url);

async function getData()
{
    //connecting mongodb
    await client.connect();
    console.log("connected to mongodb");

    //fetching database and collection
    let db = client.db(database);
    let collection = db.collection('products');
     
    //fetching data
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();