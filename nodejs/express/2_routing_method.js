var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//use middlewares (below 2 lines are required to accept input submitted via post/put/delete method)
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.json());
//create empty array
var list = [
    { 'name': 'abc', 'price': 99, 'author': 'pqr' },
    { 'name': 'qwe', 'price': 111, 'author': 'pqr' },
    { 'name': 'yui', 'price': 222, 'author': 'pqr' },
];
//define routes 
// create route to insert book 
app.post("/book", function (request, response) {
    let name = request.body.name;
    let price = request.body.price;
    let author = request.body.author;
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
    let name = request.body.name; //yui
    if (name === undefined)
        response.send('input missing');
    else {
        var isFound = false;
        var temp = list.filter((book) => {
            if (name !== book.name)
                return book
            else
                isFound = true
        })
        if (isFound) {
            list = temp; //now list has 1 less object
            response.send('Book Deleted');
        }
        else {
            response.send('Book not found');
        }
    }

});

//create route to edit product 
 
app.put("/book", function (request, response) {
    let name = request.body.name;
    let author = request.body.author;
    let price = request.body.price;
    if (name === undefined || author === undefined || price === undefined)
        response.send('input missing');
    else {
        var isFound = false;
        var temp = list.map((book) => {
            if (name === book.name) {
                //book found
                isFound = true;
                return { 'name': name, 'price': price, 'author': author }
            }
            else
                return book
        });
        console.log(temp);
        if (isFound) {
            list = temp;
            response.send('Book updated');
        }
        else
            response.send('book not found');
    }
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