const { getByIdSalesMdls, createSalesProductMdls } = require('../models/salesModels');

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
    console.log(result);
    return result;
  } catch (e) {
    console.log(`Erro no banco de dados: ${e}`);
  }
};

module.exports = {
  serviceSales,
  serviceCreateSales,
};
