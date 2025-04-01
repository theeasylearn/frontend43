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

app.get("/movie", function (request, response) {
    
    const top100Movies = [
        "The Shawshank Redemption (1994)",
        "The Godfather (1972)",
        "The Dark Knight (2008)",
        "The Godfather Part II (1974)",
        "12 Angry Men (1957)",
        "Schindler's List (1993)",
        "The Lord of the Rings: The Return of the King (2003)",
        "Pulp Fiction (1994)",
        "The Good, the Bad and the Ugly (1966)",
        "The Lord of the Rings: The Fellowship of the Ring (2001)",
        "Fight Club (1999)",
        "Forrest Gump (1994)",
        "Inception (2010)",
        "The Lord of the Rings: The Two Towers (2002)",
        "Star Wars: Episode V - The Empire Strikes Back (1980)",
        "The Matrix (1999)",
        "Goodfellas (1990)",
        "One Flew Over the Cuckoo's Nest (1975)",
        "Se7en (1995)",
        "It's a Wonderful Life (1946)",
        "The Silence of the Lambs (1991)",
        "Saving Private Ryan (1998)",
        "Star Wars: Episode IV - A New Hope (1977)",
        "Interstellar (2014)",
        "City of God (2002)",
        "Spirited Away (2001)",
        "The Green Mile (1999)",
        "Parasite (2019)",
        "Léon: The Professional (1994)",
        "The Pianist (2002)",
        "Gladiator (2000)",
        "American History X (1998)",
        "The Usual Suspects (1995)",
        "The Lion King (1994)",
        "Terminator 2: Judgment Day (1991)",
        "Back to the Future (1985)",
        "Whiplash (2014)",
        "The Prestige (2006)",
        "Grave of the Fireflies (1988)",
        "The Departed (2006)",
        "Harakiri (1962)",
        "The Intouchables (2011)",
        "The Dark Knight Rises (2012)",
        "Once Upon a Time in the West (1968)",
        "Casablanca (1942)",
        "Cinema Paradiso (1988)",
        "Rear Window (1954)",
        "Alien (1979)",
        "Apocalypse Now (1979)",
        "Memento (2000)",
        "Raiders of the Lost Ark (1981)",
        "The Great Dictator (1940)",
        "Django Unchained (2012)",
        "WALL·E (2008)",
        "The Lives of Others (2006)",
        "Sunset Boulevard (1950)",
        "Paths of Glory (1957)",
        "Avengers: Infinity War (2018)",
        "The Shining (1980)",
        "Witness for the Prosecution (1957)",
        "Aliens (1986)",
        "American Beauty (1999)",
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964)",
        "Spider-Man: Into the Spider-Verse (2018)",
        "Coco (2017)",
        "Braveheart (1995)",
        "Oldboy (2003)",
        "Amadeus (1984)",
        "Toy Story (1995)",
        "Inglourious Basterds (2009)",
        "Princess Mononoke (1997)",
        "Joker (2019)",
        "Your Name. (2016)",
        "Once Upon a Time in America (1984)",
        "Avengers: Endgame (2019)",
        "Good Will Hunting (1997)",
        "Requiem for a Dream (2000)",
        "3 Idiots (2009)",
        "Singin' in the Rain (1952)",
        "Toy Story 3 (2010)",
        "Star Wars: Episode VI - Return of the Jedi (1983)",
        "Capernaum (2018)",
        "Eternal Sunshine of the Spotless Mind (2004)",
        "Like Stars on Earth (2007)",
        "2001: A Space Odyssey (1968)",
        "Reservoir Dogs (1992)",
        "Lawrence of Arabia (1962)",
        "The Hunt (2012)",
        "Come and See (1985)",
        "Citizen Kane (1941)",
        "North by Northwest (1959)",
        "Vertigo (1958)",
        "M (1931)",
        "A Clockwork Orange (1971)",
        "Amélie (2001)",
        "Full Metal Jacket (1987)",
        "Double Indemnity (1944)",
        "The Kid (1921)",
        "Scarface (1983)",
        "The Apartment (1960)"
      ];
    response.render('nine',{
        movies: top100Movies
    });
});

app.get("/book", function (request, response) {
    
    let book = {name:'The Atomic Habit',author:'James clear',price:500};
    response.render('ten',{
        detail : book
    });
});

app.get("/movie2", function (request, response) {
    
    const top100Movies = [
        { name: "The Shawshank Redemption", year: 1994, rating: 9.3 },
        { name: "The Godfather", year: 1972, rating: 9.2 },
        { name: "The Dark Knight", year: 2008, rating: 9.0 },
        { name: "The Godfather Part II", year: 1974, rating: 9.0 },
        { name: "12 Angry Men", year: 1957, rating: 9.0 },
        { name: "Schindler's List", year: 1993, rating: 8.9 },
        { name: "The Lord of the Rings: The Return of the King", year: 2003, rating: 8.9 },
        { name: "Pulp Fiction", year: 1994, rating: 8.9 },
        { name: "The Good, the Bad and the Ugly", year: 1966, rating: 8.8 },
        { name: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, rating: 8.8 },
        { name: "Fight Club", year: 1999, rating: 8.8 },
        { name: "Forrest Gump", year: 1994, rating: 8.8 },
        { name: "Inception", year: 2010, rating: 8.7 },
        { name: "The Lord of the Rings: The Two Towers", year: 2002, rating: 8.7 },
        { name: "Star Wars: Episode V - The Empire Strikes Back", year: 1980, rating: 8.7 },
        { name: "The Matrix", year: 1999, rating: 8.7 },
        { name: "Goodfellas", year: 1990, rating: 8.7 },
        { name: "One Flew Over the Cuckoo's Nest", year: 1975, rating: 8.7 },
        { name: "Se7en", year: 1995, rating: 8.6 },
        { name: "It's a Wonderful Life", year: 1946, rating: 8.6 },
        { name: "The Silence of the Lambs", year: 1991, rating: 8.6 },
        { name: "Saving Private Ryan", year: 1998, rating: 8.6 },
        { name: "Interstellar", year: 2014, rating: 8.6 },
        { name: "City of God", year: 2002, rating: 8.6 },
        { name: "Spirited Away", year: 2001, rating: 8.6 },
        { name: "The Green Mile", year: 1999, rating: 8.6 },
        { name: "Parasite", year: 2019, rating: 8.6 },
        { name: "The Pianist", year: 2002, rating: 8.5 },
        { name: "Gladiator", year: 2000, rating: 8.5 },
        { name: "The Lion King", year: 1994, rating: 8.5 },
        { name: "Back to the Future", year: 1985, rating: 8.5 },
        { name: "Whiplash", year: 2014, rating: 8.5 },
        { name: "The Prestige", year: 2006, rating: 8.5 },
        { name: "The Departed", year: 2006, rating: 8.5 },
        { name: "The Dark Knight Rises", year: 2012, rating: 8.4 },
        { name: "Once Upon a Time in the West", year: 1968, rating: 8.4 },
        { name: "Casablanca", year: 1942, rating: 8.4 },
        { name: "Cinema Paradiso", year: 1988, rating: 8.4 },
        { name: "Rear Window", year: 1954, rating: 8.4 },
        { name: "Alien", year: 1979, rating: 8.4 },
        { name: "Apocalypse Now", year: 1979, rating: 8.4 },
        { name: "Memento", year: 2000, rating: 8.4 },
        { name: "Raiders of the Lost Ark", year: 1981, rating: 8.4 },
        { name: "Django Unchained", year: 2012, rating: 8.4 },
        { name: "WALL·E", year: 2008, rating: 8.4 },
        { name: "The Lives of Others", year: 2006, rating: 8.4 },
        { name: "The Shining", year: 1980, rating: 8.4 },
        { name: "Aliens", year: 1986, rating: 8.3 },
        { name: "American Beauty", year: 1999, rating: 8.3 },
        { name: "Dr. Strangelove", year: 1964, rating: 8.3 },
        { name: "Coco", year: 2017, rating: 8.3 },
        { name: "Braveheart", year: 1995, rating: 8.3 },
        { name: "Oldboy", year: 2003, rating: 8.3 },
        { name: "Toy Story", year: 1995, rating: 8.3 },
        { name: "Inglourious Basterds", year: 2009, rating: 8.3 },
        { name: "Joker", year: 2019, rating: 8.3 },
        { name: "Avengers: Endgame", year: 2019, rating: 8.3 },
        { name: "Good Will Hunting", year: 1997, rating: 8.3 },
        { name: "Requiem for a Dream", year: 2000, rating: 8.3 },
        { name: "3 Idiots", year: 2009, rating: 8.3 },
        { name: "Singin' in the Rain", year: 1952, rating: 8.3 },
        { name: "Eternal Sunshine of the Spotless Mind", year: 2004, rating: 8.3 },
        { name: "2001: A Space Odyssey", year: 1968, rating: 8.3 },
        { name: "Reservoir Dogs", year: 1992, rating: 8.3 },
        { name: "Lawrence of Arabia", year: 1962, rating: 8.3 },
        { name: "The Hunt", year: 2012, rating: 8.3 },
        { name: "Citizen Kane", year: 1941, rating: 8.3 },
        { name: "North by Northwest", year: 1959, rating: 8.3 },
        { name: "Vertigo", year: 1958, rating: 8.3 },
        { name: "A Clockwork Orange", year: 1971, rating: 8.3 },
        { name: "Amélie", year: 2001, rating: 8.3 },
        { name: "Full Metal Jacket", year: 1987, rating: 8.3 },
        { name: "Double Indemnity", year: 1944, rating: 8.3 },
        { name: "The Kid", year: 1921, rating: 8.3 },
        { name: "Scarface", year: 1983, rating: 8.3 },
        { name: "The Apartment", year: 1960, rating: 8.3 }
      ];
    response.render('eleven',{
        list : top100Movies /* top100Movies is list of object(100) */
    });
});

app.listen(5000, () => console.log('ready to accept request...'));