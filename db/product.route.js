import express from 'express';
import Product_controller from './product.controller';

const router = express.Router();

router.post('/create', Product_controller.create);

module.exports = router;
