"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import fs from 'fs';

// import Fuse from 'fuse.js';
// import * as utilsFunc from './utilsFunc.js';
var app = (0, _express["default"])();
var port = process.env.PORT;
var products;
var suggestedProducts;
var bestSellerProducts;

// https://expressjs.com/en/resources/middleware/cors.html
// app.use(cors());
// app.use(express.json());

// fs.readFile('./products.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   products = JSON.parse(data);

//   fs.writeFile(
//     './suggested.json',
//     utilsFunc.getSuggestedProducts(products),
//     {
//       encoding: 'utf8',
//       flag: 'w',
//     },
//     (err) => {
//       if (err) console.log(err);
//       else {
//         console.log('File written successfully\n');
//       }
//     }
//   );

//   fs.writeFile(
//     './bestSeller.json',
//     utilsFunc.getBestSellerProducts(products),
//     {
//       encoding: 'utf8',
//       flag: 'w',
//     },
//     (err) => {
//       if (err) console.log(err);
//       else {
//         console.log('File written successfully\n');
//       }
//     }
//   );
//   fs.readFile('./suggested.json', 'utf-8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     suggestedProducts = JSON.parse(data);
//   });

//   fs.readFile('./bestSeller.json', 'utf-8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     bestSellerProducts = JSON.parse(data);
//   });
// });

// app.get('/products', (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const size = parseInt(req.query.size) || 10;
//   const productOnThisPage = products.slice((page - 1) * size, page * size);
//   res.json({
//     products: productOnThisPage,
//     total: products.length,
//     count: productOnThisPage.length,
//   });
// });

// app.get('/suggested', (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const size = parseInt(req.query.size) || 10;
//   const productOnThisPage = suggestedProducts.slice(
//     (page - 1) * size,
//     page * size
//   );
//   res.json({
//     suggested: productOnThisPage,
//     total: suggestedProducts.length,
//     count: productOnThisPage.length,
//   });
// });

// app.get('/bestSeller', (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const size = parseInt(req.query.size) || 10;
//   const productOnThisPage = bestSellerProducts.slice(
//     (page - 1) * size,
//     page * size
//   );
//   res.json({
//     bestSeller: productOnThisPage,
//     total: bestSellerProducts.length,
//     count: productOnThisPage.length,
//   });
// });

// app.get('/search', (req, res) => {
//   const textQuery = req.query.text;
//   const fuseOptions = {
//     isCaseSensitive: false,
//     keys: ['title', 'category', 'brand'],
//   };

//   const fuse = new Fuse(products, fuseOptions);

//   // Change the pattern
//   // const searchPattern = ""
//   res.json(fuse.search(textQuery, { limit: 5 }));
// });

app.get('/', function (req, res) {
  res.json({
    message: 'Hello World, from express'
  });
});
app.listen(port, function () {
  return console.log("Hello world, app is listening on port ".concat(port, "!"));
});