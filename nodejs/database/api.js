// i will keep all routes of project in this file but function to handle route in other files 
var express = require('express');
var bodyParser = require('body-parser');
var book = require('./book2');
var users = require('./users2');

var app = express();
//use middlewares (below 2 lines are required to accept input submitted via post/put/delete method)
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.json());
//books api
//-------------------------------------------------------------------------------
// localhost:5000/book
// used to insert new book
// method : Post
// input : name, author, price (required)
// output : 
//         in case input is not given 
//         [{'error':'required input missing, kindly pass name,author,price'}]
//         in case book is added 
//         [{'error':'no'},{'message':'book inserted'}]
app.post("/book",(request,response) => book.insert(request,response));

// localhost:5000/book
// used to get all book
// Method : get
// input : None 
// output 
// [{"error":"no"},{"total":4},{"id":5,"name":"learn css","price":349,"author":"Italiya"},{"id":4,"name":"learn html","price":250,"author":"balar"},{"id":3,"name":"Mastering Bootstrap","price":210,"author":"Rahul"},{"id":2,"name":"Mastering Javascript","price":2100,"author":"Ankit Patel"}]
app.get("/book",(request,response) => book.select(request,response));

// localhost:5000/book
// used to get delete book with given id 
// Method : delete
// input : id (required)
// output 
app.delete("/book",(request,response) => book.delete(request,response));

// localhost:5000/book
// used to get update book name, price and author of book with given id 
// Method : put
// input : id, name,price, author (required)
// output 
app.put("/book",(request,response) => book.update(request,response));

app.post("/users/register",(request,response) => users.register(request,response));
app.post("/users/login",(request,response) => users.login(request,response));
app.post("/users/change-password",(request,response) => users.ChangePassword(request,response));
app.post("/users/forgot-password",(request,response) => users.ForgotPassword(request,response));

//server start
app.listen(5000);
console.log('ready to accept request');