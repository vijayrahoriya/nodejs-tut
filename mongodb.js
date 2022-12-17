// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dbName = 'e-comm';

// async function dbConnect(){
//     let result = await client.connect();
//     db = result.db(dbName);
//     return db.collection('products');
// }

// module.exports = dbConnect;

const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url)
const dbName = 'e-comm';

async function dbConnect(){
    let result = await client.connect();
    db = result.db(dbName);
    return db.collection('products');
}

module.exports = dbConnect;