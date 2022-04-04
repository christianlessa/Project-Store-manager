const express = require('express');

const router = express.Router();
const { 
  getAllProducts, getByIdProductCtrl, createProductCrtl,
} = require('../controllers/products');
const { 
  nameProductValid, quantityProductValid, createProductNameValid,
} = require('../middlewares/productValidation');

router.get('/', getAllProducts);
router.get('/:id', getByIdProductCtrl);
router.post('/', nameProductValid, createProductNameValid, quantityProductValid, createProductCrtl);
router.put('/:id', nameProductValid, quantityProductValid);

module.exports = {
  router,
};
