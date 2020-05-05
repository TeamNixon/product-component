const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
  id: {type: Number},
  product_name: {type: String,},
  product_price: {type: Number,},
  product_rating: {type: Number,},
  discount: {type: Boolean},
  discounted_price: {type: Number,},
  color: {type: String,},
  colors: [{type: String,}],
  product_description: {type: String,},
  in_cart: {type: Boolean,},
  reviews_amount: {type: Number,},
  questions_amount: {type: Number,},
  product_size: {type: Number,},
  product_serial: {type: String,},
  product_url: {type: String,},
  images: [{type: String,}],

});


const product = mongoose.model("product", productSchema, "Products");
module.exports = product;