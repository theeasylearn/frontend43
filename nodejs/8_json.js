// json = java script object notation
var http = require("http")

var obj = {

    name : 'the easy learn',
    mobile : 1234567890,
    email : 'theeasylearn@gmail.com',
    lang : 'nodejs'
}

var mobile = {
    name : 'product1',
    price : 12000,
    details : [34.4 , 'black','lightweight']
}
var laptop = {
    name : 'product2',
    price : 12000,
    details : [34.4 , 'red','lightweight']
}
var headphone = {
    name : 'product3',
    price : 12000,
    details : [34.4 , 'green','lightweight']
}

var server = http.createServer(function(request,response){
    console.log("a new request is comming....");
    response.writeHead(200,{'content-type':'application/json'});
    // console.log(a);
    // console.log(b);

    // var json_obj = JSON.stringify(obj);
    // response.write(json_obj) ;
    // console.log(obj);
    // console.log(json_obj);

    var url = request.url ; 
    if(url === '/mobile'){
        response.write(JSON.stringify(mobile));
    }
    else if(url === '/laptop'){
        response.write(JSON.stringify(laptop));
    }
    else if(url=== '/headphone'){
        response.write(JSON.stringify(headphone));
    }
    else{
        response.write(JSON.stringify({sucess:'no',error:'no',message:'no product found'}));
    }
    response.end();

})

server.listen(5000);
console.log("your server is ready on port : localhost:5000");