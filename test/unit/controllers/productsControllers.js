const { expect } = require('chai');
const sinon = require('sinon');
const productsMock = require('../mocks/productsMock');
const productService = require('../../../services/serviceProducts');
const productModels = require('../../../models/productsModels');
const productControllers = require('../../../controllers/products');

describe('Testando productControllers', () => {
  describe('1 - A função getAllProducts', () => {
    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      sinon.stub(productService, 'serviceProduct').resolves(productsMock.fullProductsArray);
      sinon.stub(productModels, 'listAllProducts').resolves(productsMock.fullProductsArray);
    });

    after(() => {
      productService.serviceProduct.restore();
      productModels.listAllProducts.restore();
    });

    it('1.1 - Deve retornar res.status(200)', async () => {
      await productControllers.getAllProducts(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });
  });


  describe('2 - A função getByIdProductCtrl', () => {
    const res = {};
    const req = { params: { id: 1 } };

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'serviceProduct').resolves(productsMock.productId);
    });

    after(() => {
      productService.serviceProduct.restore();
    });

    it('2.1 - Deve ser chamada com status(200)', async () => {
      await productControllers.getByIdProductCtrl(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
  
  describe('3 - A função getByIdProductCtrl', () => {
    const res = {};
    const req = { params: { id: 20 } };

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'serviceProduct').resolves(null);
    });

    after(() => {
      productService.serviceProduct.restore();
    });

    it('3.1 - Deve ser chamada com status(404) em caso de erro', async () => {
      await productControllers.getByIdProductCtrl(req, res);
      expect(res.status.calledWith(404)).to.be.equal(true);
    });
  });

  describe('4 - A função createProductCrtl', () => {
    const res = {};
    const req = { body: productsMock.singleProduct };

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'serviceProductCreate').resolves(productsMock.singleProductId);
    });

    after(() => {
      productService.serviceProductCreate.restore();
    });

    it('4.1 - Deve retornar res.status(201)', async () => {
      await productControllers.createProductCrtl(req, res);
      expect(res.status.calledWith(201)).to.be.true;
    });
  });

  describe('5 - A função createProductCrtl', () => {
    const res = {};
    const req = { body: productsMock.singleProduct };

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'serviceProductCreate').resolves(productsMock.singleProductId);
    });

    after(() => {
      productService.serviceProductCreate.restore();
    });

    it('5.1 - Deve retornar res.status(201)', async () => {
      await productControllers.createProductCrtl(req, res);
      expect(res.status.calledWith(201)).to.be.true;
    });
  });

  describe('6 - A função updateProductCrtl', () => {
    const res = {};
    const req = {
      body: productsMock.singleProduct,
      params: { id: 1 },
    };

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'serviceProductUpdate').resolves(productsMock.singleProductId);
      sinon.stub(productModels, 'getByIdProductMdls').resolves(productsMock.singleProductId);
    });

    after(() => {
      productService.serviceProductUpdate.restore();
      productModels.getByIdProductMdls.restore()
    });

    it('6.1 - Deve retornar res.status(200)', async () => {
      await productControllers.updateProductCrtl(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });
  });

  describe('7 - A função deleteProductCrtl', () => {
    const res = {};
    const req = { params: { id: 1 } };

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      res.end = sinon.stub().returns();

      sinon.stub(productService, 'serviceProductDelete').resolves(productsMock.singleProductId);
      sinon.stub(productModels, 'getByIdProductMdls').resolves(productsMock.singleProductId);
    });

    after(() => {
      productService.serviceProductDelete.restore();
      productModels.getByIdProductMdls.restore();
    });

    it('7.1 - Deve retornar res.status(204)', async () => {
      await productControllers.deleteProductCrtl(req, res);
      expect(res.status.calledWith(204)).to.be.true;
    });
  });
});