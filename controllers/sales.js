const { getAllSales } = require('../models/salesModels');
const { serviceSales, serviceCreateSales } = require('../services/serviceSales');

const getAllSalesCrtl = async (req, res) => {
  const sales = await getAllSales();
  return res.status(200).json(sales);
};

const getByIdSalesCrtl = async (req, res) => {
  const { id } = req.params;
  const sales = await serviceSales(id);

  if (sales.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  return res.status(200).json(sales);
};

const createSalesProductCrtl = async (req, res) => {
  const requestBody = req.body;
  
  const result = await serviceCreateSales(requestBody);

  const obj = {
    id: result.insertId,
    itemsSold: requestBody,
  };

  return res.status(201).json(obj);
};

module.exports = {
  getAllSalesCrtl,
  getByIdSalesCrtl,
  createSalesProductCrtl,
};