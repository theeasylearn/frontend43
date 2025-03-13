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
module.exports.HashPassword = HashPassword;