const { listAllProducts } = require('../models/productsModels');
const { serviceProduct } = require('../services/serviceProducts');

const getAllProducts = async (req, res) => {
  const result = await listAllProducts();
  return res.status(200).json(result);
};

const getByIdProductCtrl = async (req, res) => {
  const { id } = req.params;
  const result = await serviceProduct(id);

  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.status(200).json(result);
};

module.exports = {
  getAllProducts,
  getByIdProductCtrl,
};