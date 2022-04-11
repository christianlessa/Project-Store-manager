const { expect } = require('chai');
const sinon = require('sinon');
const productsMock = require('../mocks/productsMock');
const productModels = require('../../../models/productsModels');
const productService = require('../../../services/serviceProducts');

describe('Testando ProductServices', () => {
  describe('1 - A função serviceProduct', () => {
    before(() => {
      sinon.stub(productModels, 'getByIdProductMdls').resolves(productsMock.singleProductId);
    });

    after(() => {
      productModels.getByIdProductMdls.restore();
    });

    it('1.1 - passado id, retorna o objeto do id', async () => {
      const product = await productService.serviceProduct(1);
      expect(product).to.be.deep.equal(productsMock.singleProductId);
    });
  });

  describe('2 - A função serviceProductName', () => {
    before(() => {
      sinon.stub(productModels, 'getByNameMdls').resolves(productsMock.singleProductId);
    });

    after(() => {
      productModels.getByNameMdls.restore();
    });  

    it('2.1 - passado name, retorna o objeto do nome', async () => {
      const product = await productModels.getByNameMdls("produto A");
      expect(product).to.be.deep.equal(productsMock.singleProductId);
    });
  });

  describe('3 - A função serviceProductCreate', () => {
    before(() => {
      sinon.stub(productModels, 'createProductMdls').resolves(productsMock.createProdut);
    });

    after(() => {
      productModels.createProductMdls.restore();
    });

    it('3.1 - Deve criar e retornar um objeto com id, name e quantity', async () => {
      const product = await productService.serviceProductCreate(productsMock.singleProduct);
      expect(product).to.be.deep.equal(productsMock.createProdut);
    });
  });

  describe('4 - A função serviceProductUpdate', () => {
    before(() => {
      sinon.stub(productModels, 'updateProductMdls').resolves(productsMock.updateProduct);
    });

    after(() => {
      productModels.updateProductMdls.restore();
    });  

    it('4.1 - passado name e quantity, atualiza e retorna o objeto do nome', async () => {
      const product = await productService.serviceProductUpdate(productsMock.singleProductId);
      expect(product).to.be.deep.equal(productsMock.updateProduct);
    });
  });
});