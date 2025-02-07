function getdate()
{
    var d1 = new Date();
    // console.log(d1.getDate());
    // console.log(d1.getMonth());
    console.log(d1.getDate() ,"-", d1.getMonth() ,"-", d1.getFullYear());
    var d2 = d1.getDate() +"-"+ d1.getMonth() +"-"+ d1.getFullYear() ; 
    return d2 ; 

}

let gettime = function(){
    var d1 = new Date() ; 
    console.log(d1.getSeconds() ,"-", d1.getMinutes() ,"-",d1.getHours()) ;
    var t2 =d1.getSeconds() +"-"+ d1.getMinutes() +"-"+d1.getHours();
    return t2;
}

function getdatetime(){
    console.log(getdate(),gettime());
}

// getdate();
// gettime();
// getdatetime();
module.exports.getcurrentdate = getdate() ; 
module.exports.getcurrenttime = gettime() ;
module.exports.getdatetime = getdatetime() ;