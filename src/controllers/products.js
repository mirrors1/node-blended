import createHttpError from 'http-errors';
import {
  getProductsByIdService,
  getProductsService,
} from '../services/products.js';

export const productsController = async (req, res) => {
  const data = await getProductsService();
  res.json({
    status: 200,
    message: 'Successfully found products!',
    data,
  });
};

export const productsByIdController = async (req, res) => {
  const { productId } = req.params;
  const data = await getProductsByIdService(productId);

  if (!data) throw createHttpError(404, 'Product not found');

  res.json({
    status: 200,
    message: `Successfully found product with id ${productId}`,
    data,
  });
};
