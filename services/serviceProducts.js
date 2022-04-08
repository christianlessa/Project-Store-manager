const { 
  getByIdProductMdls, createProductMdls, updateProductMdls, deleteProductMdls, getByNameMdls,
} = require('../models/productsModels');

const ERROR = 'Erro no banco de dados';

const serviceProduct = async (id) => {
  try {
    const result = await getByIdProductMdls(id);
    return result;
  } catch (err) {
    return { err: 500, message: ERROR };
  }
};

const serviceProductName = async ({ name }) => {
  try {
    const getProductName = await getByNameMdls({ name });
    return getProductName;
  } catch (err) {
    return { err: 500, message: ERROR };
  }
};

const serviceProductCreate = async ({ name, quantity }) => {
  try {
    const result = await createProductMdls({ name, quantity });
    return result;
  } catch (err) {
    return { err: 500, message: ERROR };
  }
};

const serviceProductUpdate = async ({ id, name, quantity }) => {
  try {
    const result = await updateProductMdls({ id, name, quantity });
    return result;
  } catch (err) {
    return { err: 500, message: ERROR };
  }
};

const serviceProductDelete = async (id) => {
  try {
    const result = await deleteProductMdls(id);
    return result;
  } catch (err) {
    return { err: 500, message: ERROR };
  }
};

module.exports = {
  serviceProduct,
  serviceProductName,
  serviceProductCreate,
  serviceProductUpdate,
  serviceProductDelete,
};
