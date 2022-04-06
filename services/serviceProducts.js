const { 
  getByIdProductMdls, createProductMdls, updateProductMdls, deleteProductMdls, getByNameMdls,
} = require('../models/productsModels');

const serviceProduct = async (id) => {
  try {
    const result = await getByIdProductMdls(id);
    return result;
  } catch (e) {
    console.log(`Erro no banco de dados: ${e}`);
  }
};

const serviceProductName = async ({ name }) => {
  try {
    const getProductName = await getByNameMdls({ name });
    return getProductName;
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
    const result = await deleteProductMdls(id);
    return result;
  } catch (e) {
    console.log(`Erro no banco de dados: ${e}`);
  }
};

module.exports = {
  serviceProduct,
  serviceProductName,
  serviceProductCreate,
  serviceProductUpdate,
  serviceProductDelete,
};
