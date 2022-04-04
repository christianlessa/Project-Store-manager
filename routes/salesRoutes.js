const express = require('express');

const router = express.Router();
const { getAllSalesCrtl, getByIdSalesCrtl } = require('../controllers/sales');
const { productIdSalesValid, quantitySalesValid } = require('../middlewares/salesValidation');

router.get('/', getAllSalesCrtl);
router.get('/:id', getByIdSalesCrtl);
router.post('/', productIdSalesValid, quantitySalesValid);
router.put('/:id', productIdSalesValid, quantitySalesValid);

module.exports = {
  router,
};