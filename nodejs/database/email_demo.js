var e = require('./myEmail');
var receiver = "theeasylearn@gmail.com";
var subject = "test email 1";
var message = "Hello, <br/> this is test email";
var postman = new e.EMail()
postman.send(receiver,subject,message);