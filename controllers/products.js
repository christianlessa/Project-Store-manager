const productModels = require('../models/productsModels');
const productService = require('../services/serviceProducts');

const getAllProducts = async (req, res) => {
  const result = await productModels.listAllProducts();
  return res.status(200).json(result);
};

const getByIdProductCtrl = async (req, res) => {
  const { id } = req.params;
  const result = await productService.serviceProduct(id);

  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(result);
};

const createProductCrtl = async (req, res) => {
  const { name, quantity } = req.body;

  const getProductName = await productService.serviceProductName({ name });

  if (getProductName.length >= 1) {
    return res.status(409).json({ message: 'Product already exists' });
  }

  const result = await productService.serviceProductCreate({ name, quantity });

  const obj = {
    id: result.insertId,
    name,
    quantity,
  };
  return res.status(201).json(obj);
};

const updateProductCrtl = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  const getIdProduct = await productModels.getByIdProductMdls(id);

  await productService.serviceProductUpdate({ id, name, quantity });

  const productUpdated = {
    id,
    name,
    quantity,
  };
  
  if (!getIdProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.status(200).json(productUpdated);
};

const deleteProductCrtl = async (req, res) => {
  const { id } = req.params;

  const getIdProduct = await productModels.getByIdProductMdls(id);

  await productService.serviceProductDelete(id);

  if (!getIdProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.status(204).end();
};

module.exports = {
  getAllProducts,
  getByIdProductCtrl,
  createProductCrtl,
  updateProductCrtl,
  deleteProductCrtl,
};
