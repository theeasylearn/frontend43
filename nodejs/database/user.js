var express = require('express');
var bodyParser = require('body-parser');
var connection = require('./connection');
var pwd = require('./password_safety');
var app = express();
//use middlewares (below 2 lines are required to accept input submitted via post/put/delete method)
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.json());
//used to register user 
//127.0.0.1:5000/users/register
//method : post
//input: email,mobile,password (required)
//output
app.post("/users/register", function (request, response) {
    var { email, mobile, password } = request.body;
    if (email === undefined || password === undefined || mobile === undefined)
        response.json([{ 'error': 'required input missing, kindly pass email, mobile, password' }]);
    else {
        var SecretPassword = pwd.HashPassword(password).then(function (SecretPassword) {
            // console.log(SecretPassword);
            let sql = `insert into users (email,mobile,password) values ('${email}','${mobile}','${SecretPassword}')`;
            connection.con.query(sql, function (error, result) {
                if (error != null) {
                    if (error.errno === 1062)
                        response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'email/mobile is already register, use unique email & mobile' }]);
                    else
                        response.json([{ 'error': 'oops, something went wrong, contact developer' }]);
                    console.log(error);
                }
                else {
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'Registration successful' }]);
                }
            });
        });

    }
});
app.listen(5000);
console.log('ready to accept request');
