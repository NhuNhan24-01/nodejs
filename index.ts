// import { createConnection } from "typeorm";

// const express = require('express'); 
// const userRoute = require('./route/user.route.js')
// const app = express(); 
// const port = 3002; 
// // //Add headers
// // app.use(function (req, res, next) {
// //   // Website you wish to allow to connect
// //   res.setHeader('Access-Control-Allow-Origin', '*');

// //   // Request methods you wish to allow
// //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// //   // Request headers you wish to allow
// //   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// //   // Set to true if you need the website to include cookies in the requests sent
// //   // to the API (e.g. in case you use sessions)
// //   res.setHeader('Access-Control-Allow-Credentials', true);

// //   // Pass to next layer of middleware
// //   next();
// // });
// createConnection()
//   .then(() => {
//     console.log('Connected to database');
//   })
//   .catch((error) => {
//     console.log('Error connecting to database:', error);
//   });
//  //parse requests of content-type - application/json
// app.use(express.json()); /* bodyParser.json() is deprecated */
// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// app.use('/', userRoute);
// app.listen(port, function(){
//     console.log('Your app running on port '+ port);
// })
