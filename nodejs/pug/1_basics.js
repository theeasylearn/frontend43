var express = require('express')
var app = express()

app.set("view engine", "pug");
app.set("views", "views");
//create route 
app.get('/intro', function (request, response) {
    response.render('one');
});

app.get("/two", function (request, response) {
    response.render('two');
});

app.get("/three", function (request, response) {
    response.render('three');
});

app.get("/state", function (request, response) {
    response.render('four');
});

app.get("/table", function (request, response) {
    response.render('five');
});
app.get("/branch/bhavnagar", function (request, response) {
    response.render('six', {
        name: "Narmada Nursery - Bhavnagar",
        mobile: "+91 98250 12345",
        email: "info@narmada-nursery.com",
        address: "105, Eva Surbhi, Opp. Aksharwadi Temple, Waghawadi Road, Bhavnagar"
    });
});

app.get("/branch/baroda", function (request, response) {
    response.render('six', {
        name: "XYZ Corporation, Baroda",
        mobile: "+91 12345 12345",
        email: "abc@xyz.com",
        address: "100, near station road, behind service station, baroda"
    });
});

app.get("/branch/rajkot", function (request, response) {
    response.render('six', {
        name: "abc enterprise",
        mobile: "+91 112233 4455",
        email: "abc@pathshala.com",
        address: "50, near ST Bus station, Station Chowk, main bazar, rajkot"
    });
});
app.listen(5000, () => console.log('ready to accept request...'));