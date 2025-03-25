//delete document
var { dbPromise } = require('./connection');
var updatedObject = {$set:{name:'nikunj',surname:'bhatt',age:42}};
var condition = {name:'kartik'};
dbPromise.then((database) => {
    database.collection('person').deleteOne(condition,updatedObject, function (error, response) {
        if (error != null) {
            console.log('There is some error in deleting the document:', error.message);
        } else {
            console.log('person has been deleted successfully:');
        }
    });

}).catch((error) => {
    console.log(error);
});