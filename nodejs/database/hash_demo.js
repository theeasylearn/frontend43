var bcrypt = require('bcrypt');
const saltRounds = 10;
var PlainText = "jay_shree_krisha";
bcrypt.hash(PlainText, saltRounds, function(err, hash) {
   if(err)
        console.log('error in hashing');
   else 
        console.log(hash);
});