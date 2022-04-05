const productIdSalesValid = (req, res, next) => {
  const productIdBody = req.body;

  if (productIdBody.some(({ productId }) => productId === undefined)) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  next();
};

const quantitySalesValid = (req, res, next) => {
  const quantityBody = req.body;

  // if feito com ajuda de Renan Souza.
  if (quantityBody.some(({ quantity }) => quantity === undefined)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  if (quantityBody.some(({ quantity }) => quantity < 1)) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = {
  productIdSalesValid,
  quantitySalesValid,
};