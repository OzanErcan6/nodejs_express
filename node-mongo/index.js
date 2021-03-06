const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations')

// create mongodb container with 
// sudo docker ps -a
// sudo docker start b87e02d2c8da
// sudo docker run --name mongodb -d -p 27017:27017 mongo
const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url).then((client) => {

    console.log('Connected correctly to server');

    const db = client.db(dbname);

    dboper.insertDocument(db, {name: "Vadonut", description: 'Test'}, 'dishes')
    .then((result) => {
        console.log("Insert Document:\n", result.ops)
        return dboper.findDocuments(db, 'dishes') 
    })
    .then((docs) => {
        console.log('Found Documents:\n', docs)
        return dboper.updateDocument(db, {name: 'Vadonut'}, {description: 'Updated Test'}, 'dishes')
    })
    .then((result) => {
        console.log('Updated Document:\n', result.result)          
        return dboper.findDocuments(db, 'dishes')
    })
    .then((docs) => {
        console.log('Found Documents:\n', docs)
        return db.dropCollection('dishes')
    })
    .then((result) => {
        console.log('Dropped collection: ', result)
        client.close()
    })
    .catch((err) => console.log(err))
}).catch((err) => console.log(err))

