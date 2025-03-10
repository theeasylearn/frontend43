var connection = require('./connection'); 
var sql = "insert into teachers (name,mobile,age,class) values ('Patel Ankit','9662512857','40','12')";
console.log(sql);
//run sql command 
connection.con.query(sql,function(error,result){
    if(error)
    {
        console.log(error);
    }
    else 
    {
        console.log('Teacher Added ' + result.insertId);
        console.log('No of rows Affect ' + result.affectedRows);
    }
});
connection.con.end();