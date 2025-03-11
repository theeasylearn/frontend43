var connection = require('./connection');
var sql = "select * from person order by name";
//run sql command 
connection.con.query(sql,function(error,result,fields){
    if(error)
    {
        console.log(error);
    }
    else 
    {
        //display field names
        //console.log(fields); //fields is list it has all field names fetched in sql command
        //display all records 
        //console.log(result);
        let size = result.length; // length return no of elements list(result) has 
        for(let index=0;index<size;index++)
        {
            console.log(result[index]['id'] + " " + result[index]['name'] + " " + result[index]['salary'] + result[index]['dob']);
        }    
    }
});