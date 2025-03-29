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
//localhost:5000/greeting?name=Pavitra&gender=male
//localhost:5000/greeting?name=divya&gender=female
app.get("/greeting", function (request, response) {
    var name = request.query.name;
    var gender = request.query.gender;
    if (!name || !gender)
        response.send('input missing, kindly send name and gender');
    else
        response.render('seven', {
            personName: name,
            personGender: gender
        });

});
app.get("/country", function (request, response) {
    response.render('eight', {
        countries: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
            "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
            "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
            "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
            "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
            "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
            "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
            "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
            "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos",
            "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
            "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
            "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
            "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
            "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
            "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
            "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
            "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
            "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
            "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
            "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]
        
    });
});
app.listen(5000, () => console.log('ready to accept request...'));