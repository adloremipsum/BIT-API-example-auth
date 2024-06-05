import cors from "cors";
import productController from "./controllers/productController.js";
import categoryController from "./controllers/categoryController.js";
import express from "express";
const app = express();

app.use(cors());
app.use(express.json());

// Rutas

app.get("/api/products", productController.list);
app.get("/api/products/:id", productController.find);
app.post("/api/products", productController.create);

app.get("/api/categories", categoryController.list);
app.get("/api/categories/:id", categoryController.find);
app.post("/api/categories", categoryController.create);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
