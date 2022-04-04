const { listAllProducts } = require('../models/productsModels');

const nameProductValid = async (req, res, next) => {
  const { name } = req.body;

  if (name === undefined) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};

const quantityProductValid = (req, res, next) => {
  const { quantity } = req.body;

  if (quantity === undefined) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  const quantityInt = Number(quantity);

  if (quantityInt < 1) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

const createProductNameValid = async (req, res, next) => {
  const { name } = req.body;

  const getProductsName = await listAllProducts();
  const result = getProductsName.some((product) => name === product.name);

  if (result) {
    return res.status(409).json({ message: 'Product already exists' });
  }

  next();
};

module.exports = {
  nameProductValid,
  quantityProductValid,
  createProductNameValid,
};
