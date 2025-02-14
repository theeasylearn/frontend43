// localhost:5000/write?name = 'filename.txt'&content = '...'
var http = require("http");
var myurl = require('url');
var fs =require('fs');
var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    var url = myurl.parse(request.url,true);
    var filename = url.query.name.split("'").join("");
    var content =url.query.content.split("'").join("") ;

    if(url.pathname === '/write'){
        if(filename === undefined || content === undefined){
            response.write('<h1>give name and content parameters....</h1>')
        }
        else{
            fs.writeFile(filename,content,function(error){
                if(error){
                    response.write(error);
                }
                else{
                    response.write(`<h1>content written in ${filename}....</h1>`);
                }
                response.end();
            })
        }
    }

    

})

server.listen(5000);
console.log("your server is ready on port : localhost:5000");