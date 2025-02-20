var express = require('express');
var app = express();
//create empty array
var list = [{'name':'ghi','price':99,'author':'pqr'}];
//define routes 
// create route to insert book 
app.post("/book",function(request,response){
    let book = {'name':'abc','price':100,'author':'xyz'};
    list.push(book);
    response.send('Book Added');
})

//create route to delete book 
app.delete("/book",function(request,response){
    list.pop(); //remove value from the end of list
    response.send('Book Deleted');
});

//create route to edit book 
app.put("/book",function(request,response){
    response.send('Book edited.');
});

//create get all books 
app.get("/book",function(request,response){
    response.json(list);
});


const portno = 5000;
app.listen(portno,function(error){
    if(error)
        console.log('server could not started');
    else 
        console.log('server has been started successfully');
})