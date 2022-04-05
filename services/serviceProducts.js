const { 
  getByIdProductMdls, createProductMdls, updateProductMdls, deleteProductMdl,
} = require('../models/productsModels');

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

const serviceProductUpdate = async ({ id, name, quantity }) => {
  try {
  const result = await updateProductMdls({ id, name, quantity });
  return result;
  } catch (e) {
    console.log(`Erro no banco de dados: ${e}`);
  }
};

const serviceProductDelete = async (id) => {
  try {
    const result = await deleteProductMdl(id);
    return result;
  } catch (e) {
    console.log(`Erro no banco de dados: ${e}`);
  }
};

module.exports = {
  serviceProduct,
  serviceProductCreate,
  serviceProductUpdate,
  serviceProductDelete,
};
