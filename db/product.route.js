import Product_controller from "./product.controller";
import express from "express";
const router = express.Router();

router.post('/create', Product_controller.create);

module.exports = router;