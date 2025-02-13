var fs = require('fs');
var filename = 'demo.txt';
fs.readFile(filename,function(error,content){
    if(error){
        console.log("error : ");
        console.log(error);
    }
    else{
        console.log(content.toString());
    }
})

console.log("this is new content....");