var connection = require('./connection'); 
var sql = "update teachers set name='Devarsh Patel',age='18' where id=2";
console.log(sql);
//run sql command 
connection.con.query(sql,function(error,result){
    if(error)
    {
        console.log(error);
    }
    else 
    {
        console.log('Teacher Updated ' + result.insertId);
        console.log('No of rows Affect ' + result.affectedRows);
    }
});
connection.con.end();