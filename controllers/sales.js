const { getAllSales } = require('../models/salesModels');
const { serviceSales } = require('../services/serviceSales');

const getAllSalesCrtl = async (req, res) => {
  const sales = await getAllSales();
  res.status(200).json(sales);
};

const getByIdSalesCrtl = async (req, res) => {
  const { id } = req.params;
  const sales = await serviceSales(id);

  if (sales.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  return res.status(200).json(sales);
};

module.exports = {
  getAllSalesCrtl,
  getByIdSalesCrtl,
};