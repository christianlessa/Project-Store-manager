const productIdSalesValid = (req, res, next) => {
  const { productId } = req.body;

  if (productId === undefined) {
    res.status(400).json({ message: '"productId" is required' });
  }

  next();
};

const quantitySalesValid = (req, res, next) => {
  const { quantity } = req.body;

  if (quantity === undefined) {
    res.status(400).json({ message: '"quantity" is required' });
  }

  const quantityInt = Number(quantity);

  if (quantityInt.length < 1) {
    res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = {
  productIdSalesValid,
  quantitySalesValid,
};