// json = java script object notation
var http = require("http")

var obj = {

    name : 'the easy learn',
    mobile : 1234567890,
    email : 'theeasylearn@gmail.com',
    lang : 'nodejs'
}

var server = http.createServer(function(request,response){
    console.log("a new request is comming....");
    response.writeHead(200,{'content-type':'application/json'});
    // console.log(a);
    // console.log(b);

    var json_obj = JSON.stringify(obj);
    response.write(json_obj) ;
    console.log(obj);
    console.log(json_obj);
    response.end();

})

server.listen(5000);
console.log("your server is ready on port : localhost:5000");