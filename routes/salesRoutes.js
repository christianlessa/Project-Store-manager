const express = require('express');

const router = express.Router();
const {
  getAllSalesCrtl, getByIdSalesCrtl, createSalesProductCrtl,
} = require('../controllers/sales');
const { productIdSalesValid, quantitySalesValid } = require('../middlewares/salesValidation');

router.get('/', getAllSalesCrtl);
router.get('/:id', getByIdSalesCrtl);
router.post('/', productIdSalesValid, quantitySalesValid, createSalesProductCrtl);
router.put('/:id', productIdSalesValid, quantitySalesValid);

module.exports = {
  router,
};