var express = require('express');
var bodyParser = require('body-parser');
var { dbPromise } = require('./connection');
var app = express();
//use middlewares (below 2 lines are required to accept input submitted via post/put/delete method)
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.json());

//create api to insert document
//127.0.0.1:5000/person 
//method : post
app.post("/person", function (request, response) {
    dbPromise.then((database) => {
        let object = request.body;
        console.log(object); //  {name:'samarth',surname:'Balar',gender:'Male'}
        database.collection('person').insertOne(object);
        response.json([{ 'error': 'no', 'message': 'object saved' }]);

    }).catch((error) => {
        console.log(error);
        response.json([{ 'error': 'yes', 'message': 'error in connection' }]);
    });
});

//create api to update document
//127.0.0.1:5000/person 
//method : put
//input : name,surname,age (required)
app.put("/person", function (request, response) {
    dbPromise.then((database) => {
        //this function will run if connection is successful
        var condition = { name: request.body.name };
        var updatedDocument = { $set: { surname: request.body.surname, age: request.body.age } };
        database.collection('person').updateOne(condition, updatedDocument, function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'yes', 'message': 'document can not be updated' }]);
            }
            else {
                response.json([{ 'error': 'no', 'message': 'object updated' }]);
            }
        });
    }).catch((error) => {
        //this function will run if connection failed
        console.log(error);
        response.json([{ 'error': 'yes', 'message': 'error in connection' }]);
    });
});
//create api to delete document
//127.0.0.1:5000/person 
//method : delete
//input : name(required)
app.delete("/person", function (request, response) {
    var condition = { name: request.body.name };
    dbPromise.then((database) => {
        database.collection('person').deleteOne(condition, function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'yes', 'message': 'document can not be deleted' }]);
            }
            else {
                response.json([{ 'error': 'no', 'message': 'document deleted' }]);
            }
        })
    }).catch((error) => {
        console.log(error);
        response.json([{ 'error': 'yes', 'message': 'error in connection' }]);
    })
});

//create api to fetch all documents
//127.0.0.1:5000/person 
//method : get
//input : none

//create api to fetch only given no of documents
//127.0.0.1:5000/person?count=10 
//method : get
//input : count 

//create api to fetch documents field wise 
//127.0.0.1:5000/person?arrange=name
//method : get
//input : name

//create api to fetch documents as per condition (filter)
//127.0.0.1:5000/person?field=surname&value=patel
//method : get
//input : field, value 

app.get("/person", function (request, response) {
    var count = request.query.count;
    var arrange = request.query.arrange;
    var field = request.query.field;
    var value = request.query.value;

    console.log(arrange); //undefined in case count is not given with request
    dbPromise.then((database) => {
        if (count !== undefined) {
            //limited documents fetch
            database.collection('person').find({}).limit(parseInt(count)).toArray(function (error, data) {
                ``
                response.json(data);
            })
        }
        else if (arrange !== undefined) {
            let sortField = {}; //empty object
            sortField[arrange] = 1;
            database.collection('person').find({}).sort(sortField).toArray(function (error, data) {
                response.json(data);
            })
        }
        else if (field !== undefined && value !== undefined) {
            var condition = {}; //empty array
            condition[field] = { $eq: value }; // Correct way to use a dynamic field
            console.log(condition);
            database.collection('person').find(condition).toArray(function (error, data) {
                response.json(data);
            });
        }
        else {
            //all document fetch
            database.collection('person').find({}).toArray(function (error, data) {
                response.json(data);
            })
        }
    }).catch((error) => {
        //in case of error with connecting database 
        console.log(error);
        response.json([{ 'error': 'error in connecting database' }])
    })
});

app.listen(5000);
console.log('we are ready to accept request');