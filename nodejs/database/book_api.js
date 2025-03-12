var express = require('express');
var bodyParser = require('body-parser');
var connection = require('./connection');
var app = express();
//use middlewares (below 2 lines are required to accept input submitted via post/put/delete method)
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.json());

// localhost:5000/book
// used to insert new book
// method : Post
// input : name, author, price (required)
// output : 
//         in case input is not given 
//         [{'error':'required input missing, kindly pass name,author,price'}]
//         in case book is added 
//         [{'error':'no'},{'message':'book inserted'}]
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
// localhost:5000/book
// used to get all book
// Method : get
// input : None 
// output 
// [{"error":"no"},{"total":4},{"id":5,"name":"learn css","price":349,"author":"Italiya"},{"id":4,"name":"learn html","price":250,"author":"balar"},{"id":3,"name":"Mastering Bootstrap","price":210,"author":"Rahul"},{"id":2,"name":"Mastering Javascript","price":2100,"author":"Ankit Patel"}]
app.get("/book",function(request,response){
    var sql = "select * from book order by id desc";
    connection.con.query(sql,function(error,result){
        if(error!=null)
            response.json([{'error':'oops, something went wrong, contact developer'}]);
        else 
        {
            //add new object that has key total at beginning
            result.unshift({'total':result.length});
            //add object to provide info there is no error
            result.unshift({'error':'no'});
            response.json(result);
        }
    })
});
// localhost:5000/book
// used to get delete book with given id 
// Method : delete
// input : id (required)
// output 
app.delete("/book",function(request,response)
{
    var id = request.body.id;
    if(id === undefined)
        response.json([{'error':'required input missing, kindly pass id'}]);
    else 
    {
        var sql = `delete from book where id=${id}`;
        connection.con.query(sql,function(error,result){
            if(error)
                response.json([{'error':'oops, something went wrong, contact developer'}]);
            else 
            {
                if(result.affectedRows === 0)
                {
                    response.json([{'error':'no'},{'message':'book not found'}]);
                }
                else 
                {
                    response.json([{'error':'no'},{'message':'book deleted'}]);
                }
            }
        });
    }
});
// localhost:5000/book
// used to get update book name, price and author of book with given id 
// Method : put
// input : id, name,price, author (required)
// output 
app.put("/book",function(request,response){
    //object destructring
    let {id,name,author,price} = request.body;
    if(id === undefined || name === undefined || author=== undefined || price === undefined)
    {
        response.json([{'error':'required input missing, kindly pass id,name,author,price'}]);
    }    
    else 
    {
        var sql = `update book set name='${name}',author='${author}',price=${price} where id=${id}`;
        connection.con.query(sql,function(error,result){
            if(error)
                response.json([{'error':'oops, something went wrong, contact developer'}]);
            else 
            {
                if(result.affectedRows === 0)
                {
                    response.json([{'error':'no'},{'message':'book not found'}]);
                }
                else 
                {
                    response.json([{'error':'no'},{'message':'book updated'}]);
                }
            }
        });
    }
});
//server start
app.listen(5000);
console.log('ready to accept request');