var http = require('http');
var server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    console.log("new request....");
    var url = req.url;
    console.log(url);

    var output='';
    if(url=='/'){
        // res.write(`home page`);
        output = `home page`;
    }
    else if(url == '/contact'){
        // res.write('contact page');
        output = `contact page`;
    }
    else if(url == '/about'){
        // res.write('about page');
        output = `about page`;
    }
    else if(url == '/login'){
        // res.write('login page');
        output = `login page`;
    }
    else{
        // res.write(`404 - page not found`);
        res.statusCode = 404;
        output = `404 - page not found`;
    }

    output = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>`+ output +`</h1>
</body>
</html>` ;

    res.write(output);
    res.end();
})

server.listen(5000);
console.log("server is ready");