var fs = require('fs');
var fileName = 'fruits.txt';
var newFileName = 'vegis.txt'
fs.rename(fileName,newFileName,function(error){
    if(error==null)
        console.log('file renamed');
    else 
    {
        if(error.errno === -4058)
            console.log(fileName, ' does not exists');
        else 
            console.log('file could not renamed ');
        
        console.log(error);
    }
})