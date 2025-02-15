var http = require("http");
var fs = require('fs');
var myurl = require('url');
var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    var m1 = myurl.parse(request.url , true) ; 
    console.log(m1);
    var filename = m1.query.name.split("'").join("") ;
    var content = m1.query.content.split("'").join("") ; 

    content = '\n'+content ;

    if(filename===undefined || content ===undefined){
        response.write("<h1>give name and content....</h1>")
    }

    else{
        if(m1.pathname === '/add'){
            // asyncronous
            fs.appendFile(filename,content,function(error){
                if(error){
                    response.write("not written in file");
                }
                else{
                    response.write(`content added to ${filename}`);
                    var d1 = new Date;
                    var fulldate = d1.getDate() + "-"+( d1.getMonth()+1) +"-"+ d1.getFullYear() ;
                    var fulltime = d1.getSeconds() +"-" + d1.getMinutes() +"-"+d1.getHours();

                    var con = "\n"+fulldate +" "+fulltime+" "+filename ;
                    fs.appendFileSync("details.txt",con);
                }
                response.end()

            })
        }
        else if(m1.pathname === '/create'){
            // syncronous
            fs.appendFileSync(filename,content) ; 
            response.write("new file created....");
            response.end();
        }
    }
})

server.listen(5000);
console.log("your server is ready on port : localhost:5000");