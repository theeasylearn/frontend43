var express = require('express');
var app = express();
app.get("/",function(request,response){
    response.send("<h1>Menu</h1> <hr/> 1) Punjabi 2) Gujarati 3) Chines 4) South Indian 5) fast food ");
});
app.get("/punjabi",function(request,response){
    response.send("<h1>Punjabi items </h1> 1. Chole Bhature<br>  2. Sarson Da Saag<br>  3. Makki Di Roti<br>  4. Amritsari Kulcha<br>  5. Dal Makhani<br>  6. Paneer Tikka<br>  7. Rajma Chawal<br>  8. Butter Chicken<br>  9. Pindi Chana<br>  10. Lassi<br>  ")
});
app.get("/south-indian",function(request,response){
    response.send("<h1>South indian </h1> Dosa <br>, Idli <br>, Vada <br>, Uttapam <br>, Pongal <br>, Sambar <br>, Rasam <br>, Avial <br>, Puliyodarai <br>, Payasam <br>");
});
//create function which will execute when request is received for non-existing route 
app.all("*",function(request,response){
    response.send("no such menu item exists.");
})
app.listen(5000);
console.log('ready to accept request');