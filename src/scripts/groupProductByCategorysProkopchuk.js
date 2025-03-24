import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";

let products = [];

const groupProductByCategorysProkopchuk = async () => {
  try {
    //Зчитуємо дані з файлу
    const productsData = await fs.readFile(PATH_DB, "UTF-8");
    //Приводимо дані до JSON
    products = JSON.parse(productsData);
    //Вибираємо в новий масив всі значення з ключа "category"
    const categories = products.map(({ category }) => category);
    //Зберігаємо в колекцію унікальні значення
    const productsСategories = [...new set(categories)];
    //Створюємо новий об'єкт по умові ТЗ
    let objectResult = {};
    //Зберігаємо в об'єкт ключ (значення category)
    //Значення ключа об'єкту дорівнює масиву назв продуктів, які належать до цієї категорії.
    productsСategories.forEach((element) => {
      objectResult[element] = ProductByCategorys(element);
    });
    console.log(objectResult);
  } catch (error) {
    console.error("Помилка зчитування продуктів: ", error);
  }
};

//функція повертає масив назв продуктів по вказаній категорії
const ProductByCategorys = (categoryName) => {
  const findProducts = products.filter(
    (product) => product.category === categoryName
  );
  return findProducts.map(({ name }) => name);
};

groupProductByCategorysProkopchuk();
