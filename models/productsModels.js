const { connection } = require('./connection');

const listAllProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products ORDER BY id;');
  return products;
};

const getByIdProductMdls = async (id) => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return products[0];
};

const createProductMdls = async ({ name, quantity }) => {
  const [products] = await connection.execute(
    `INSERT INTO
      StoreManager.products (name, quantity)
    VALUES (?, ?);`, [name, quantity],
  );
  return products;
};

module.exports = {
  listAllProducts,
  getByIdProductMdls,
  createProductMdls,
};
