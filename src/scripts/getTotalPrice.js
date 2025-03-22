import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";

const getTotalPrice = async () => {
  try {
    const productsData = await fs.readFile(PATH_DB, "UTF-8");
    const products = JSON.parse(productsData);
    const totalPrice = products.reduce(
      (acc, product) => acc + Number(product.price),
      0
    );
    console.log(totalPrice.toFixed(2));
  } catch (error) {
    console.error("Помилка", error);
  }
};

getTotalPrice();
