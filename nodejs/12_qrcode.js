var qr = require('qrcode');
var content = "hello world this is qrcode...."

// link 
qr.toDataURL(content,function(error,url){
    if(error){
        console.log(error);
    }
    else{
        console.log("qrcode generated.....");
        console.log(url);
    }
})

// file
qr.toFile("qrcode_image.png","www.youtube.com",function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("qrcode_image.png is generated....")
    }
})

// terminal
qr.toString("this is content of qrcode....",{type:'terminal'},function(error,url){
    if(error){
        console.log(error);
    }
    else{
        console.log(url);
    }
})