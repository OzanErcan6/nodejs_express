// insert find remove and update operations

const assert = require('assert')

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection)
    coll.insert(document, (err, result) => {
        assert.equal(err, null)
        // how many documents inserted
        console.log("Inserted " + result.result.n + " documents into the collection " + collection ) 
        // receive result as callback result
        callback(result)
    })
}

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection)
    coll.find({}).toArray((err, docs) => {
        assert.equal(err, null)
        //retrieve back docs to the callee function
        callback(docs)
    })
}

exports.removeDocument = (db,document, collection, callback) => {
    const coll = db.collection(collection)
    coll.deleteOne(document, (err, result) => {
        assert.equal(err, null)
        console.log("Removed the document", document)
        callback(result)
    })
}

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection)
    coll.updateOne(document, { $set: update}, null, (err, result) => {
        assert.equal(err, null)
        console.log("updated the document with ", update)
        callback(result)
    })
}









