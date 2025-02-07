var http = require("http")
var server = http.createServer(function(request,response){
    console.log("a new request is comming....");
    // console.log(a);
    // console.log(b);

})

server.listen(5000);
console.log("your server is ready on port : localhost:5000");

// import { createServer } from 'node:http';

// const hostname = '127.0.0.1';
// const port = 5000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link
//     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
//     rel="stylesheet"
//     integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
//     crossorigin="anonymous">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
// </head>
// <body>
    
//     <div class="container">
//         <div class="row mt-2">
//             <div class="col-6">
//                 <div class=" toast show">
//                     <div class=" toast-header text-bg-dark">
//                         <strong class="me-auto">bootstrap-5 toast</strong>

//                         <small>11 min ago</small>
//                         <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
//                     </div>
//                     <div class="toast-body">
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsa tempore neque quas veniam rerum, tenetur id. 
//                         </p>

//                         <h5 class="text-end"><i class="fa-brands fa-facebook"></i>
//                             <i class="fa-brands fa-whatsapp"></i>
//                             <i class="fa-brands fa-twitter"></i></h5>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <script
//     src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
//     integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
//     crossorigin="anonymous"></script>
// </body>
// </html>
//     `);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// // server.listen(port);