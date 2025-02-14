var http = require("http");
var fs = require('fs');
var url = require('url');
var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    var myurl = url.parse(request.url,true) ; 
    // console.log(myurl.pathname);
    // var filename = "."+myurl.pathname ; 
    var filename = request.url.substr(1) ; 
    fs.readFile(filename,function(error,content){
        if(error){
            response.write("<h1>file not found</h1>");
        }
        else{
            response.write(content.toString());
        }
        response.end();

    })
    response.write("hello world....");
})

server.listen(5000);
console.log("your server is ready on port : localhost:5000");