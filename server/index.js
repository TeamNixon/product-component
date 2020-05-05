const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index');
const mongoose = require('mongoose');
const Product = require('../db/product.model.js');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', express.static(__dirname + '/../client/dist'));


app.get('/api/:product_serial', function(req,res){
  let serial = req.params.product_serial;
  //A1057-307-00
  let query = {product_serial : `${serial}`};
  Product.findOne(query, function(err, result){
    if(err){ console.error(err)};
    console.log(serial, "product", result, "result")
    res.status(200).send(result);
  });
});

app.listen(PORT, () => {
  console.log(`listening on Port ${PORT}`);
});