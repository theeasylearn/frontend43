var fs = require('fs');
var file = "demo.txt"
fs.unlink(file,function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log(`${file} is deleted sucessfully`);
    }
})