// rotas
const express = require('express');

const router = express.Router();
const { 
  getAllProducts, getByIdProductCtrl, createProductCrtl, updateProductCrtl, deleteProductCrtl,
} = require('../controllers/products');
// const { 
//   nameProductValid, quantityProductValid, createProductNameValid,
// } = require('../middlewares/productValidation');

router.get('/', getAllProducts);
router.get('/:id', getByIdProductCtrl);
router.post('/', createProductCrtl);
router.put('/:id', updateProductCrtl);
router.delete('/:id', deleteProductCrtl);

module.exports = router;
