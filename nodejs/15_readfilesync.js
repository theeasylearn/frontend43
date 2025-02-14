var fs = require('fs');

try{
    var content = fs.readFileSync("de.txt",'utf-8');
    console.log(content);
}
catch(error){
    console.log("error : ");
    console.log(error);
}

console.log("new line....");

// try:    
    // code 
// catch(error){
    // error
// }