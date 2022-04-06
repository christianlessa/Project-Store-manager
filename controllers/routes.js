const express = require('express');

const productRouter = express.Router();
const { getAllProducts, getByIdProductCtrl } = require('./products');

productRouter.get('/', getAllProducts);
productRouter.get('/:id', getByIdProductCtrl);

module.exports = {
  productRouter,
};
