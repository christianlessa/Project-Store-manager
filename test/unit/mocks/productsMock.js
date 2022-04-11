module.exports = {
  emptyArray: [],
  emptyObj: {},

  productId: {
    id: 1,
    name: "Martelo de Thor",
    quantity: 10
  },
  
  singleProductId: {
    id: 1,
    name: "produto A",
    quantity: 10
  },

  singleProduct: {
    name: "produto A",
    quantity: 10
  },

  createProdut: {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 2,
    info: '',
    serverStatus: 2,
    warningStatus: 0
  },

  updateProduct: {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 1  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 1
  },

  fullProductsArray: [
    {
      id: 1,
      name: "produto A",
      quantity: 10
    },
    {
      id: 2,
      name: "produto B",
      quantity: 20
    },
    {
      id: 3,
      name: "produto C",
      quantity: 30
    }
  ],

  error: {
    err: 500,
    message: 'Erro no banco de dados'
  }
}
