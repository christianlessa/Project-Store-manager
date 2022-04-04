const { getByIdSalesMdl } = require('../models/salesModels');

const serviceSales = async (id) => {
  try {
    const result = await getByIdSalesMdl(id);
    return result;
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

module.exports = {
  serviceSales,
};
