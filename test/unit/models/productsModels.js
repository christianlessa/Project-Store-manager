const { expect } = require("chai");
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productsMdls = require('../../../models/productsModels');
const productsMock = require('../mocks/productsMock');

describe('productModel', () => {
  describe('A função `listAllProducts` deve', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([productsMock.fullProductsArray]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retornar um array de objeto de produtos', async () => {
      const products = await productsMdls.listAllProducts();
      expect(products).to.be.deep.equal(productsMock.fullProductsArray);
    });
  });

  describe('a função getByNameMdls deve', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([productsMock.singleProductId]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Retornar objeto do produto igual ao name', async () => {
      const products = await productsMdls.getByNameMdls(productsMock.singleProductId.name);
      expect(products).to.deep.equal(productsMock.singleProductId);
    });

  });

  describe('a função getByNameMdls deve', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([productsMock.emptyObj]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Retornar um objeto vazio caso name nao existir', async () => {
      const product = await productsMdls.getByNameMdls(productsMock.singleProductId.name);
      expect(product).to.be.deep.equal(productsMock.emptyObj);
    });
  }); 
  
  describe('a função getByIdProductMdls deve', () => {
    const arrayProduct = [productsMock.singleProductId];

    before(() => {
      sinon.stub(connection, 'execute').resolves([arrayProduct]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Retornar objeto do produto igual ao id', async () => {
      const products = await productsMdls.getByIdProductMdls(1);
      expect(products).to.be.deep.equal(productsMock.singleProductId);
    });
  });
});