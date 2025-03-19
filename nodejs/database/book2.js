var connection = require('./connection');
module.exports.insert = function(request,response){
    //create local variable to accept book name, price,author
    let name = request.body.name;
    let author = request.body.author;
    let price = request.body.price;
    if(name === undefined || author === undefined || price === undefined)
    {
        response.json([{'error':'required input missing, kindly pass name,author,price'}]);
    }    
    else 
    {
        var sql=`insert into book (name,author,price) values ('${name}','${author}','${price}')`;
        //run query
        connection.con.query(sql,function(error,result){
            if(error)
                response.json([{'error':'oops, something went wrong, contact developer'}]);
            else 
                response.json([{'error':'no'},{'message':'book inserted'}]);

        });
    }

}
module.exports.select = function(request,response){
    var sql = "select * from book order by id desc";
    connection.con.query(sql,function(error,result){
        if(error!=null)
            response.json([{'error':'oops, something went wrong, contact developer'}]);
        else 
        {
            //add new object that has key total at beginning
            result.unshift({'total':result.length});
            //add object to provide info there is no error
            result.unshift({'error':'no'});
            response.json(result);
        }
    })
}
module.exports.delete = function(request,response)
{
    var id = request.body.id;
    if(id === undefined)
        response.json([{'error':'required input missing, kindly pass id'}]);
    else 
    {
        var sql = `delete from book where id=${id}`;
        connection.con.query(sql,function(error,result){
            if(error)
                response.json([{'error':'oops, something went wrong, contact developer'}]);
            else 
            {
                if(result.affectedRows === 0)
                {
                    response.json([{'error':'no'},{'message':'book not found'}]);
                }
                else 
                {
                    response.json([{'error':'no'},{'message':'book deleted'}]);
                }
            }
        });
    }
}

module.exports.update = function(request,response){
    //object destructing
    let {id,name,author,price} = request.body;
    if(id === undefined || name === undefined || author=== undefined || price === undefined)
    {
        response.json([{'error':'required input missing, kindly pass id,name,author,price'}]);
    }    
    else 
    {
        var sql = `update book set name='${name}',author='${author}',price=${price} where id=${id}`;
        connection.con.query(sql,function(error,result){
            if(error)
                response.json([{'error':'oops, something went wrong, contact developer'}]);
            else 
            {
                if(result.affectedRows === 0)
                {
                    response.json([{'error':'no'},{'message':'book not found'}]);
                }
                else 
                {
                    response.json([{'error':'no'},{'message':'book updated'}]);
                }
            }
        });
    }
}