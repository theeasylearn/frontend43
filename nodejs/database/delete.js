var connection = require('./connection'); 
var sql = "delete from teachers where id=3";
console.log(sql);
//run sql command 
connection.con.query(sql,function(error,result){
    if(error)
    {
        console.log(error);
    }
    else 
    {
        console.log('Teacher Deleted ' + result.insertId);
        console.log('No of rows Affect ' + result.affectedRows);
    }
});
connection.con.end();