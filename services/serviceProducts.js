const { getByIdProductMdl } = require('../models/productsModels');

const serviceProduct = async (id) => {
  try {
    const result = await getByIdProductMdl(id);
    return result;
  } catch (e) {
    console.log(`Erro no banco de dados: ${e}`);
  }
};

module.exports = {
  serviceProduct,
};
