const connection = require('./connection');

const listAllProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products ORDER BY id;');
  return products;
};

const getByIdProductMdls = async (id) => {
  const [product] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;', [id],
  );
  return product[0];
};

const createProductMdls = async ({ name, quantity }) => {
  const [products] = await connection.execute(
    `INSERT INTO
      StoreManager.products (name, quantity)
    VALUES (?, ?);`, [name, quantity],
  );
  return products;
};

const updateProductMdls = async ({ id, name, quantity }) => {
  const [product] = await connection.execute(
    `UPDATE StoreManager.products
    SET name = ?, quantity = ?
    WHERE id = ?;`,
    [name, quantity, id],
  );
  return product;
};

const deleteProductMdls = async (id) => {
  const [product] = await connection.execute(
  `DELETE FROM StoreManager.products 
  WHERE id = ?`, [id],
  );
  return product;
};

module.exports = {
  listAllProducts,
  getByIdProductMdls,
  createProductMdls,
  updateProductMdls,
  deleteProductMdls,
};
