var pwd = require('./password_safety');
var SecretPassword = pwd.HashPassword('Ankit Patel').then(function (SecretPassword){
    console.log(SecretPassword);
});