const {
  getByIdSalesMdls, createSalesProductMdls, updateSalesMdls,
} = require('../models/salesModels');

const serviceSales = async (id) => {
  try {
    const result = await getByIdSalesMdls(id);
    return result;
  } catch (e) {
    console.log(`Erro no banco de dados: ${e}`);
  }
};

const serviceCreateSales = async (requestBody) => {
  try {
    const result = await createSalesProductMdls(requestBody);
    return result;
  } catch (e) {
    console.log(`Erro no banco de dados: ${e}`);
  }
};

const serviceUpdateSales = async (requestBody, id) => {
  try {
    const result = await updateSalesMdls(requestBody, id);
    return result;
  } catch (e) {
    console.log(`Erro no banco de dados: ${e}`);
  }
};

module.exports = {
  serviceSales,
  serviceCreateSales,
  serviceUpdateSales,
};
