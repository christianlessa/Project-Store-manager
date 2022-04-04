const express = require('express');

const router = express.Router();
const { 
  getAllProducts, getByIdProductCtrl, createProductCrtl,
} = require('../controllers/products');
const { validCreateProduct } = require('../middlewares/productValidation');

router.get('/', getAllProducts);
router.get('/:id', getByIdProductCtrl);
router.post('/', validCreateProduct, createProductCrtl);

module.exports = {
  router,
};
