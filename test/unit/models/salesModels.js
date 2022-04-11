const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const salesModels = require('../../../models/salesModels');
const salesMock = require('../mocks/salesMock');

describe('Testando SalesModel', () => {
  describe('1 - A função getAllSales', () => {
    const salesArray = [salesMock.fullArray];

    before(() => {
      sinon.stub(connection, 'execute').resolves([salesArray]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('1.1 - retorna um array de objeto das vendas ao ser chamada', async () => {
    const products = await salesModels.getAllSales();
    expect(products).to.be.deep.equal([salesMock.fullArray]);
    });
  });

  describe('2 - A função getByIdSalesMdls', () => {
    const salesArray = [salesMock.saleIdArray];

    before(() => {
      sinon.stub(connection, 'execute').resolves([salesArray]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('2.1 - Retorna um objeto da venda do id passado', async () => {
    const products = await salesModels.getByIdSalesMdls(1);
    expect(products).to.be.deep.equal([salesMock.saleIdArray]);
    });
  });

  describe('3 - A função createSalesProductMdls', () => {
    const salesArray = [salesMock.saleCreated];

    before(() => {
      sinon.stub(connection, 'execute').resolves([salesArray]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('3.1 - Retorna um objeto da venda criada', async () => {
    const products = await salesModels.createSalesProductMdls(salesMock.saleCreateArray);
    expect(products).to.be.deep.equal([salesMock.saleCreated]);
    });
  });
});