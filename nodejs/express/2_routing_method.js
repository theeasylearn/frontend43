var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//use middlewares (below 2 lines are required to accept input submitted via post/put/delete method)
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.json());
//create empty array
var list = [{ 'name': 'ghi', 'price': 99, 'author': 'pqr' }];
//define routes 
// create route to insert book 
app.post("/book", function (request, response) {
    let name = request.body.name;
    let price = request.body.price;
    let au   thor = request.body.author;
    if (name === undefined || price === undefined || author === undefined)
        response.send('name author price are required inputs');
    else {
        let book = { 'name': name, 'price': price, 'author': author };
        list.push(book);
        response.send('Book Added');
    }
})

//create route to delete book 
app.delete("/book", function (request, response) {
    list.pop(); //remove value from the end of list
    response.send('Book Deleted');
});

//create route to edit book 
app.put("/book", function (request, response) {
    response.send('Book edited.');
});

//create get all books 
app.get("/book", function (request, response) {
    response.json(list);
});


const portno = 5000;
app.listen(portno, function (error) {
    if (error)
        console.log('server could not started');
    else
        console.log('server has been started successfully');
})