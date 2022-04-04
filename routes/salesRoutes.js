const express = require('express');

const router = express.Router();
const { getAllSalesCrtl, getByIdSalesCrtl } = require('../controllers/sales');

router.get('/', getAllSalesCrtl);
router.get('/:id', getByIdSalesCrtl);

module.exports = {
  router,
};