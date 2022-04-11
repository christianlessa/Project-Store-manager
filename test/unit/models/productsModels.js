const sinon = require('sinon');
const { expect } = require('chai');
const productsMock = require('../mocks/productsMock');
const connection = require('../../../models/connection');
const productsMdls = require('../../../models/productsModels');

describe('Testando ProductModel', () => {
  describe('1 - A função `listAllProducts`', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([productsMock.fullProductsArray]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('1.1 - retorna um array de objeto de produtos ao ser chamada', async () => {
      const products = await productsMdls.listAllProducts();
      expect(products).to.be.deep.equal(productsMock.fullProductsArray);
    });
  });

  describe('2 - A função getByNameMdls', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([productsMock.singleProductId]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('2.1 - Dado um nome, retorna um objeto do produto igual ao name', async () => {
      const product = await productsMdls.getByNameMdls(productsMock.singleProductId.name);
      expect(product).to.deep.equal(productsMock.singleProductId);
    });
  });

  describe('3 - A função getByNameMdls', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([productsMock.emptyObj]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('3.1 - Retorna um objeto vazio caso name nao existir', async () => {
      const product = await productsMdls.getByNameMdls(productsMock.singleProductId.name);
      expect(product).to.be.deep.equal(productsMock.emptyObj);
    });
  }); 
  
  describe('4 - A função getByIdProductMdls', () => {
    const arrayProduct = [productsMock.singleProductId];

    before(() => {
      sinon.stub(connection, 'execute').resolves([arrayProduct]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('4.1 - Dado um id, retorna um objeto do produto igual ao id', async () => {
      const products = await productsMdls.getByIdProductMdls(1);
      expect(products).to.be.deep.equal(productsMock.singleProductId);
    });
  });
});