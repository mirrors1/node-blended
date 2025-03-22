import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";

const getProductsCategores = async () => {
  try {
    const productsData = await fs.readFile(PATH_DB, "UTF-8");
    const products = JSON.parse(productsData);
    const categores = products.map((product) => product.category);
    const productsCategores = categores.filter(
      (item, index, arr) => arr.indexOf(item) === index
    );
    console.log(productsCategores);
  } catch (error) {
    console.error("Помилка", error);
  }
};

getProductsCategores();
