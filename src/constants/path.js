import path from "node:path";

// export const PATH_DB = path.resolve("src", "db", "products.json");
export const PATH_DB = path.join(process.cwd(), "src", "db", "products.json");
