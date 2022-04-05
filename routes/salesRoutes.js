const express = require('express');

const router = express.Router();
const {
  getAllSalesCrtl, getByIdSalesCrtl, createSalesProductCrtl, updateSalesCrtl,
} = require('../controllers/sales');
const { productIdSalesValid, quantitySalesValid } = require('../middlewares/salesValidation');

router.get('/', getAllSalesCrtl);
router.get('/:id', getByIdSalesCrtl);
router.post('/', productIdSalesValid, quantitySalesValid, createSalesProductCrtl);
router.put('/:id', productIdSalesValid, quantitySalesValid, updateSalesCrtl);

module.exports = router;