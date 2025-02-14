var fs = require('fs');
var filename = 'demo.txt';
fs.readFile(filename,'utf-8',function(error,content){
    if(error){
        console.log("error : ");
        console.log(error);
    }
    else{
        console.log(content);
    }
})

console.log("this is new content....");
