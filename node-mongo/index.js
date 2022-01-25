const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations')

// create mongodb container with 
// sudo docker run --name mongodb -d -p 27017:27017 mongo
const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {

    assert.equal(err,null);

    console.log('Connected correctly to server');

    const db = client.db(dbname);
    dboper.insertDocument(db, {name: "Vadonut", description: 'Test'}, 'dishes', (result) => {
        console.log("Insert Document:\n", result.ops)

        dboper.findDocuments(db, 'dishes', (docs) => {
            console.log('Found Documents:\n', docs)

            dboper.updateDocument(db, {name: 'Vadonut'}, {description: 'Updated Test'}, 'dishes', (result) => {
                console.log('Updated Document:\n', result.result)
                
                dboper.findDocuments(db, 'dishes', (docs) => {
                    console.log('Found Documents:\n', docs)

                    db.dropCollection('dishes', (result) => {
                        console.log('Dropped collection: ', result)
                        client.close()
                    })
                })

            })
        })
    })

});