var http = require("http");
var url = require('url');
var routes = [
    { "from": "bhavnagar", "to": "surat", "type": "ac", "time": "9:00 am" },
    { "from": "ahmedabad", "to": "vadodara", "type": "sleeper", "time": "10:30 pm" },
    { "from": "rajkot", "to": "jamnagar", "type": "ac", "time": "6:15 am" },
    { "from": "surat", "to": "mumbai", "type": "non-ac", "time": "3:45 pm" },
    { "from": "bhavnagar", "to": "ahmedabad", "type": "ac", "time": "7:20 am" },
    { "from": "vadodara", "to": "rajkot", "type": "sleeper", "time": "11:00 pm" },
    { "from": "jamnagar", "to": "bhavnagar", "type": "non-ac", "time": "8:30 am" },
    { "from": "surat", "to": "ahmedabad", "type": "ac", "time": "5:00 pm" },
    { "from": "mumbai", "to": "vadodara", "type": "sleeper", "time": "2:15 am" },
    { "from": "ahmedabad", "to": "rajkot", "type": "ac", "time": "4:45 pm" }
  ]


var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    console.log("a new request is comming....");
    var m1 = url.parse(request.url , true);
    console.log(m1);
    var output = 0;
    if(m1.pathname === '/routes'){
        // console.log(m1.query.from);
        // console.log(m1.query.to);

        routes.map(function(element){
            // console.log("'"+element.from + "'");
            // console.log("'"+element.to+"'");
            var from = "'"+element.from + "'";
            var to = "'"+element.to+"'";
            if(m1.query.from === from && m1.query.to === to){
                var content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        td{
            font-size: 2rem;
        }
    </style>
</head>
<body>
    <table border="1" cellpadding="10px">
        <tr>
            <td>from</td>
            <td>${element.from}</td>
        </tr>
        <tr>
            <td>to</td>
            <td>${element.to}</td>
        </tr>
        <tr>
            <td>type</td>
            <td>${element.type}</td>
        </tr>
        <tr>
            <td>time</td>
            <td>${element.time}</td>
        </tr>
    </table>
</body>
</html>`;
                response.write(content);
                // response.write(`match`);
                // console.log("match");
                output =1;
            }
            
        })

    }
    

    if(output===0){
        response.write(`<h1>route not found....</h1>`);
    }

    response.end()
})

server.listen(5000);
console.log("your server is ready on port : localhost:5000");