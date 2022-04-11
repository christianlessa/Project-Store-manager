const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const salesModels = require('../../../models/salesModels');
const salesMock = require('../mocks/salesMock');

describe('Testando SalesModel', () => {
  describe('1 - A função `getAllSales`', () => {
    const salesArray = [salesMock.fullArray];

    before(() => {
      sinon.stub(connection, 'execute').resolves([salesArray]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('1.1 - retorna um array de objeto de produtos ao ser chamada', async () => {
    const products = await salesModels.getAllSales();
      console.log()
    expect(products).to.be.deep.equal([salesMock.fullArray]);
    });
  });
});