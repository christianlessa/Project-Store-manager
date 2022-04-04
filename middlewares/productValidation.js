const { listAllProducts } = require('../models/productsModels');

const nameProductValid = (req, res, next) => {
  const { name } = req.body;

  if (name === undefined) {
    res.status(400).json({ message: '"name" is required' });
  }

  if (name.length < 5) {
    res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};

const quantityProductValid = (req, res, next) => {
  const { quantity } = req.body;

  if (quantity === undefined) {
    res.status(400).json({ message: '"quantity" is required' });
  }

  const quantityInt = Number(quantity);

  if (!quantityInt.length > 0) {
    res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

const validCreateProduct = async (req, res, next) => {
  const { name } = req.body;

  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  
  const getProducts = await listAllProducts();

  const result = getProducts.some((product) => name === product.name);

  if (result) {
    return res.status(409).json({ message: 'Product already exists' });
  }

  next();
};

module.exports = {
  nameProductValid,
  quantityProductValid,
  validCreateProduct,
};
