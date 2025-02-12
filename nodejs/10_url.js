// https://www.google.com/search?client=firefox-b-d&q=nodejs+packages

// localhost:5000/about?label=value&...

var http = require("http");
var myurl = require("url");
var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    console.log("a new request is comming....");
    // console.log(myurl);
    var m1 = myurl.parse(request.url,true);
    console.log(m1);
    console.log(m1.query);
    console.log(m1.query.name);
    console.log(m1.query.email);
    console.log(m1.pathname);
    var name = m1.query.name ; 
    response.write(`<h1>${name}</h1>`);
    response.end();

})

server.listen(5000);
console.log("your server is ready on port : localhost:5000");