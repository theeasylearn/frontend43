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
app.post("/person",function(request,response){
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
app.put("/person",function(request,response){
    dbPromise.then((database) => {
        //this function will run if connection is successful
        var condition = {name:request.body.name};
        var updatedDocument = {$set:{surname:request.body.surname,age:request.body.age}};
        database.collection('person').updateOne(condition,updatedDocument,function(error,result){
            if(error!=null)
            {
                response.json([{ 'error': 'yes', 'message': 'document can not be updated' }]);
            }    
            else 
            {
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
app.delete("/person",function(request,response){
    var condition = {name:request.body.name};
    dbPromise.then((database) => {
        database.collection('person').deleteOne(condition,function(error,result){
            if(error!=null)
                {
                    response.json([{ 'error': 'yes', 'message': 'document can not be deleted' }]);
                }    
                else 
                {
                    response.json([{ 'error': 'no', 'message': 'document deleted' }]);
                }
        })
    }).catch((error) => {
        console.log(error);
        response.json([{ 'error': 'yes', 'message': 'error in connection' }]);
    })
});

app.listen(5000);
console.log('we are ready to accept request');