const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productsMock = require('../mocks/productsMock');
const productService = require('../../../services/serviceProducts');

describe('Testando ProductServices', () => {
  describe('1 - A função serviceProduct', () => {
    const arrayProduct = [productsMock.singleProductId];

    before(() => {
      sinon.stub(connection, 'execute').resolves([arrayProduct]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('1.1 - Dado um id, retorna um objeto do produto igual ao id', async () => {
      const product = await productService.serviceProduct(1);
      expect(product).to.be.deep.equal(productsMock.singleProductId);
    });
  });

  describe('2 - A função serviceProductName', () => {
    const arrayProduct = [productsMock.singleProductId];

    before(() => {
      sinon.stub(connection, 'execute').resolves([arrayProduct]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('2.1 - Dado um nome, retorna um objeto do produto igual ao name', async () => {
      const product = await productService.serviceProduct(productsMock.singleProductId.name);
      expect(product).to.deep.equal(productsMock.singleProductId);
    });
  });

  describe('3 - Deve retornar `Error` com status: 500 da função', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(productsMock.error);
    });

    after(() => {
      connection.execute.restore();
    });

    it('3.1 - serviceProduct se passar um id inexistente', async () => {
      const product = await productService.serviceProduct();
      expect(product).to.be.deep.equal(productsMock.error);
    });

    it('3.2 - serviceProductName se passar um id inexistente', async () => {
      const product = await productService.serviceProductName('');
      expect(product).to.be.deep.equal(productsMock.error);
    });

    it('3.3 - serviceProductCreate se passar um id inexistente', async () => {
      const product = await productService.serviceProductCreate('');
      expect(product).to.be.deep.equal(productsMock.error);
    });
  });
});