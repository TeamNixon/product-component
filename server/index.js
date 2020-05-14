const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index')
const mongoose = require('mongoose');
const Product = require('../db/product.model.js');
const url = require('url');
const cors = require('cors');



const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../client/dist')));


app.get('/serial/:product_serial', (req, res) => {
  const serial = req.params.product_serial;
  // console.log(req.params);
  // console.log(serial);
  // A1057-307-00
  const query = {
    product_serial: `${serial}` };
  Product.findOne(query, (err, result) => {
    if (err) { console.error(err); }
     console.log(serial, "product", result, "result")
    res.status(200).send(result);
  });
});

app.get('/product/:product_name', (req, res) => {
  let name = req.params.product_name;
  // console.log(Product);
  // console.log(req.params);
  // console.log(name);
  // replace the hyphens from params with a space for query
  name = name.replace(/-/g, ' ');
  const query = { product_name: `${name}` };
  // console.log(query);
  Product.find(query, (err, result) => {
    if (err) { console.error(err); }
    console.log(name, 'name', result, 'results');
    res.status(200).send(result);
  });
});


app.post('/serial/:product_serial', (req, res)=>{
  const serial = req.params.product_serial;
  const queryGet = {
    product_serial: `${serial}` };
  const queryAddToCart = {
    $set: {in_cart: true} };
  Product.findOneAndUpdate(queryGet, queryAddToCart, (err, result) => {
    if (err) { console.error(err); }
     //console.log(result, "result");
    res.status(200).send(result);
  });
});


app.get(('/bundle/bundle.js'), (req, res) => {
  console.log(req)

    res.status(200).sendFile(path.resolve(__dirname, '../client') + '/dist/bundle.js');

});


app.listen(PORT, () => {
  console.log(`listening on Port ${PORT}`);
});
