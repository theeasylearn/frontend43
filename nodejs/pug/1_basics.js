var express = require('express')
var app = express()

app.set("view engine","pug");
app.set("views","views");
//create route 
app.get('/intro',function(request,response){
    response.render('one');
});

app.listen(5000,() => console.log('ready to accept request...'));