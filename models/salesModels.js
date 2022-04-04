const { connection } = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id AS saleId,
    s.date,
    sp.product_id AS productId,
    sp.quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.sale_id
    ORDER BY saleId ASC, productId ASC;`,
  );

  return result;
};

const getByIdSalesMdl = async (id) => {
  const [saleId] = await connection.execute(
    `SELECT s.date,
    sp.product_id AS productId,
    sp.quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.sale_id
    WHERE sp.sale_id = ?
    ORDER BY sp.sale_id ASC, productId ASC`,
    [id],
  );
  return saleId;
};

module.exports = {
  getAllSales,
  getByIdSalesMdl,
};
