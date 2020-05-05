import Product_model from "./product.model";

exports.create_product = (req, res, next) =>{
  let product_body = req.body;
  const new_product = new Product_model(product_body);
  new_product.save()
    .then((saved) => {
      if(!saved){
        return res.status(400).send('unable to save product try again');
      } else if(saved){
        return res.status(201).send('product successfully saved');
      }
    })
    .catch((error) =>{
      return console.error(error);
    })
};