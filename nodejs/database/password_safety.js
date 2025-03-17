var bcrypt = require('bcrypt');
const saltRounds = 10;
function HashPassword(PlainText) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(PlainText, saltRounds, function (err, hash) {
            if (err) {
                console.log('Error in hashing');
                reject(err);
            } else {
                resolve(hash);
            }
        });
    });
}
function ComparePassword(PlainTextPassword, HashedPassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(PlainTextPassword, HashedPassword, function (err, result) {
            if (err) {
                console.log('Error in matching password');
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}
module.exports.HashPassword = HashPassword;
module.exports.ComparePassword = ComparePassword;
