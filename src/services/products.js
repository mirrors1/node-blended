import { ProductsCollection } from '../db/models/Product.js';

// export const getProductsService = () => {
//   return ProductsCollection.find();
// };

export const getProductsService = () => ProductsCollection.find();

export const getProductsByIdService = (id) =>
  ProductsCollection.findOne({ _id: id });

export const createProductService = (productData) =>
  ProductsCollection.create(productData);
