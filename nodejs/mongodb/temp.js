var { dbPromise } = require('./connection');

dbPromise.then((database) => {
    database.collection('person').find({}).toArray(function (error, documents) {
        if (error != null) {
            console.log('There is some error in fetching the documents:', error.message);
        } else {
            console.log('Fetched persons:', documents);
        }
    });
}).catch((error) => {
    console.log(error);
});
