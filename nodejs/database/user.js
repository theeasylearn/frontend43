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
app.post("/users/login", function (request, response) {
    var { email, password } = request.body;
    if (email === undefined || password === undefined)
        response.json([{ 'error': 'required input missing, kindly pass email & password' }]);
    else {
        let sql = `select id,password from users where email='${email}'`;
        connection.con.query(sql, function (error, result) {
            if (error) {
                response.json([{ 'error': 'oops, something went wrong, contact developer' }]);
            }
            else {
                //check how many rows fetched by sql statement. if no row fetched it means  email not found otherwise email found
                if (result.length === 0) {
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'email not found' }]);
                }
                else {
                    //email found (now match hashed password in database with plaintext password)
                    pwd.ComparePassword(password, result[0]['password']).then(function (isMatched) {
                        if (isMatched === false) {
                            response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'login attempt failed' }]);
                        }
                        else {
                            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'login successful' }, { 'id': result[0]['id'] }]);
                        }
                    });

                }
            }
        });
    }
});

//change password 
app.post("/users/change-password", function (request, response) {
    var { id, password, newPassword } = request.body;
    if (id === undefined || password === undefined || newPassword === undefined)
        response.json([{ 'error': 'required input missing, kindly pass id & password and new password' }]);
    else {
        let sql = `select password from users where id=${id}`;
        connection.con.query(sql, function (error, result) {
            if (error) {
                response.json([{ 'error': 'oops, something went wrong, contact developer' }]);
            }
            else {
                //check how many rows fetched by sql statement. if no row fetched it means  id not found otherwise id found
                if (result.length === 0) {
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'id not found, login again' }]);
                }
                else {
                    //id found (now match hashed password in database with plaintext password)
                    pwd.ComparePassword(password, result[0]['password']).then(function (isMatched) {
                        if (isMatched === false) {
                            response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'password change attempt failed' }]);
                        }
                        else {
                            var SecretPassword = pwd.HashPassword(password).then(function (SecretPassword) {
                                let sql = `update users set password='${SecretPassword}' where id=${id}`;
                                connection.con.query(sql, function (error2, result) {
                                    if (error2 != null) {
                                        response.json([{ 'error': 'oops, something went wrong, contact developer' }]);
                                    }
                                    else {
                                        response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'password change successful' }]);
                                    }
                                });
                            });
                        }
                    });

                }
            }
        });
    }
});
app.listen(5000);
console.log('ready to accept request');
