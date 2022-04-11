const productModels = require('../models/productsModels');

const ERROR = 'Erro no banco de dados';

const serviceProduct = async (id) => {
  try {
    const result = await productModels.getByIdProductMdls(id);
    return result;
  } catch (err) {
    console.log(err.message, 'erro no service');
    return err.message;
  }
};

const serviceProductName = async ({ name }) => {
  try {
    const getProductName = await productModels.getByNameMdls({ name });
    return getProductName;
  } catch (err) {
    return { err: 500, message: ERROR };
  }
};

const serviceProductCreate = async ({ name, quantity }) => {
  try {
    const result = await productModels.createProductMdls({ name, quantity });
    return result;
  } catch (err) {
    return { err: 500, message: ERROR };
  }
};

const serviceProductUpdate = async ({ id, name, quantity }) => {
  try {
    const result = await productModels.updateProductMdls({ id, name, quantity });
    return result;
  } catch (err) {
    return { err: 500, message: ERROR };
  }
};

const serviceProductDelete = async (id) => {
  try {
    const result = await productModels.deleteProductMdls(id);
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
