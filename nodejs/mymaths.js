// first way to export a object
var operations = {
    add : function(a,b){
        return a+b ; 
    },
    
    sub : function(a,b){
        return a-b;
    },
    
    multiply : function(a,b){
        return a*b;
    },
    
    div : function(a,b){
        return a/b ; 
    }
}


function add(a,b){
    return a+b ; 
}

function sub(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function div(a,b){
    return a/b ; 
}

// second way to export a object
var operation2 = {add,sub,multiply,div} ;

module.exports.o1 = operations ; 
module.exports.o2 = operation2 ;