const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir =require('../helpers/path');
const productController = require('../controllers/product')

router.get('/add-product',productController.getAddProduct);

router.post('/product',productController.postAddProduct);

module.exports = router;