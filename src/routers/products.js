import { Router } from 'express';
import {
  createProductController,
  productsByIdController,
  productsController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const productsRouter = Router();

productsRouter.get('/products', ctrlWrapper(productsController));

productsRouter.get('/products/:productId', ctrlWrapper(productsByIdController));

productsRouter.post('/products', ctrlWrapper(createProductController));

export default productsRouter;
