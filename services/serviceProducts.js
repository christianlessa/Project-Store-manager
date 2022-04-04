const { getByIdProductMdls, createProductMdls } = require('../models/productsModels');

const serviceProduct = async (id) => {
  try {
    const result = await getByIdProductMdls(id);
    return result;
  } catch (e) {
    console.log(`Erro no banco de dados: ${e}`);
  }
};

const serviceProductCreate = async ({ name, quantity }) => {
  try {
    const result = await createProductMdls({ name, quantity });
    return result;
  } catch (e) {
    console.log(`Erro no banco de dados: ${e}`);
  }
};

module.exports = {
  serviceProduct,
  serviceProductCreate,
};
