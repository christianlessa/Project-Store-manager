const { connection } = require('./connection');

const listAllProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products ORDER BY id;');
  return products;
};

const getByIdProductMdl = async (id) => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return products[0];
};

module.exports = {
  listAllProducts,
  getByIdProductMdl,
};
