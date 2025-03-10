// this file will be used whenever we connect nodejs with mysql
var mysql = require('mysql');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:'3306', 
    database:'frontend43'
});
//now establish connection 
con.connect(function(error){
    if(error)
    {
        console.log('error in establishing connection');
        connect.log(error);
    }
    else 
        console.log('connection eastablished.');
});
module.exports.con = con; //required