var { MongoClient } = require('mongodb');
var url = "mongodb://0.0.0.0:27017";
var dbName = "frontend43"; // Replace with your actual database name
var client = new MongoClient(url);
var dbPromise = client.connect().then(() => {
    console.log("Connected to MongoDB ......");
    return client.db(dbName);  //retrieves a specific database from the connected MongoDB server.
}).catch((e) => {
    console.error("Database connection error:", e);
    throw e;
});
module.exports = { dbPromise };