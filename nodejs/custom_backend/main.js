var http = require('http');
var fs = require('fs');

var home = fs.readFileSync('./index.html');
var login = fs.readFileSync('./login.html');
var about = fs.readFileSync('./about.html');
var contact = fs.readFileSync('./contact.html');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    // res.write('hello world');
    var url = req.url ;
    if(url == '/'){
        res.write(home) ;
    }
    else if(url=='/login'){
        res.write(login);
    }
    else if(url=='/about'){
        res.write(about);
    }
    else if(url=='/contact'){
        res.write(contact);
    }
    else{
        res.statusCode = 404 ; 
        res.write(`<h1>404 - page not found</h1>`) ; 
    }
    res.end();
})

server.listen(5000)
console.log('server is ready....');