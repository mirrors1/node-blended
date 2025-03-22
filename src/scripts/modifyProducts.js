import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";

const modifyProducts = async () => {
  try {
    const productsData = await fs.readFile(PATH_DB, "UTF-8");
    const products = JSON.parse(productsData);
    const modifyProducts = products.map(
      ({ description, ...product }) => product
    );
    await fs.writeFile(PATH_DB, JSON.stringify(modifyProducts, null, 2));
  } catch (error) {
    console.error("Помилка", error);
  }
};

modifyProducts();
