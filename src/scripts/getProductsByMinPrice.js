import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";

const getProductsByMinPrice = async (byMinPrice) => {
  try {
    const productsData = await fs.readFile(PATH_DB, "UTF-8");
    const products = JSON.parse(productsData);
    const findProduct = products.filter(
      (product) => product.price > byMinPrice
    );

    console.log(`Продукти з ціною меншою за ${byMinPrice}:`, findProduct);
  } catch (error) {
    console.error("Помилка зчитування продуктів: ", error);
  }
};

getProductsByMinPrice(300);
