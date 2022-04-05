const connection = require('./connection');

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

const getByIdSalesMdls = async (id) => {
  const [saleId] = await connection.execute(
    `SELECT s.date,
      sp.product_id AS productId,
      sp.quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.sale_id
    WHERE sp.sale_id = ?
    ORDER BY sp.sale_id ASC, productId ASC;`,
    [id],
  );
  return saleId;
};

// função criada com ajuda do Ricci na mentoria.
const createSalesProductMdls = async (requestBody) => {
  const [sale] = await connection.execute(
    `INSERT INTO
      StoreManager.sales
      (date)
    VALUES
      (NOW());`,
  );
  
  await Promise.all(requestBody.map(async (elem) => {
    await connection.execute(
      `INSERT INTO
        StoreManager.sales_products 
        (sale_id, product_id, quantity)
      VALUES 
        (?, ?, ?);`,
      [sale.insertId, elem.productId, elem.quantity],
    );
  }));
  return sale;
};

const updateSalesMdls = async (requestBody, id) => {
  await Promise.all(requestBody.map(async (elem) => {
    const [update] = await connection.execute(
      `UPDATE 
        StoreManager.sales_products
      SET 
        product_id = ?, quantity = ?
      WHERE 
        sale_id = ?;`,
      [elem.productId, elem.quantity, id],
    );
    return update;
  }));
};

module.exports = {
  getAllSales,
  getByIdSalesMdls,
  createSalesProductMdls,
  updateSalesMdls,
};
