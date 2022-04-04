const express = require('express');

const router = express.Router();
const { getAllProducts, getByIdProductCtrl } = require('../controllers/products');

router.get('/', getAllProducts);
router.get('/:id', getByIdProductCtrl);

module.exports = {
  router,
};
