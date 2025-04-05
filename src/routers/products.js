import { Router } from 'express';
import {
  productsByIdController,
  productsController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const productsRouter = Router();

productsRouter.get('/products', ctrlWrapper(productsController));

productsRouter.get('/products/:productId', ctrlWrapper(productsByIdController));

export default productsRouter;
