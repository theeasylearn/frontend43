var express = require('express');
var bodyParser = require('body-parser');
var connection = require('./connection');
var app = express();
//use middlewares (below 2 lines are required to accept input submitted via post/put/delete method)
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.json());
//create route(page) to insert new book
// input name, author, price 

app.post("/book",function(request,response){
    //create local variable to accept book name, price,author
    let name = request.body.name;
    let author = request.body.author;
    let price = request.body.price;
    if(name === undefined || author === undefined || price === undefined)
    {
        response.json([{'error':'required input missing, kindly pass name,author,price'}]);
    }    
    else 
    {
        var sql=`insert into book (name,author,price) values ('${name}','${author}','${price}')`;
        //run query
        connection.con.query(sql,function(error,result){
            if(error)
                response.json([{'error':'oops, something went wrong, contact developer'}]);
            else 
                response.json([{'error':'no'},{'message':'book inserted'}]);

        });
    }

});

//server start
app.listen(5000);
console.log('ready to accept request');