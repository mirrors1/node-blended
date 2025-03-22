import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";
import { createFakeProduct } from "../utils/createFakeProduct.js";

const generateProducts = async (amount) => {
  try {
    const productsData = await fs.readFile(PATH_DB, "UTF-8");
    const products = JSON.parse(productsData);
    const newProducts = Array(amount).fill(0).map(createFakeProduct);
    const productsList = [...products, ...newProducts];

    await fs.writeFile(PATH_DB, JSON.stringify(productsList, null, 2));

    console.log("Дані згенеровані");
  } catch (error) {
    console.error("Помилка генерації продуктів: ", error);
  }
};

generateProducts(5);
