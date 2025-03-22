import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";

let products = [];

const groupProductByCategorysProkopchuk = async () => {
  try {
    const productsData = await fs.readFile(PATH_DB, "UTF-8");
    products = JSON.parse(productsData);
    const categories = products.map(({ category }) => category);
    const productsСategories = categories.filter(
      (item, index, arr) => arr.indexOf(item) === index
    );
    let objectResult = {};
    productsСategories.forEach((element) => {
      objectResult[element] = ProductByCategorys(element);
    });
    console.log(objectResult);
  } catch (error) {
    console.error("Помилка зчитування продуктів: ", error);
  }
};

const ProductByCategorys = (categoryName) => {
  const findProducts = products.filter(
    (product) => product.category === categoryName
  );
  return findProducts.map(({ name }) => name);
};

groupProductByCategorysProkopchuk();
