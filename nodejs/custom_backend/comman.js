function layout(content){
    var output = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        ul{
            display: flex;
            list-style-type: none;
        }
        li{
            margin: 20px;
            font-size: 1.5rem;
        }
        a{
            text-decoration: none;
        }
    </style>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/home">home</a></li>
            <li><a href="/contact">contact</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/login">login</a></li>
        </ul>
    </nav>
    <h1>
        ${content}
    </h1>
</body>
</html>`;
    return output;
}

module.exports.menu = layout ; 