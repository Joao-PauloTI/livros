const { Router } = require("express");
const multer = require("multer");
const LivroController = require("./controllers/LivroController");
const uploadConfig = require("./config/upload");
const routes = new Router();

const upload = multer(uploadConfig);
routes.post("/livrosImage", upload.single("image"), LivroController.storeImage);
routes.post("/livro", LivroController.store);
routes.get("/livros", LivroController.index);
routes.put("/livro/:id", LivroController.update);
routes.delete("/livro/:id", LivroController.destroy);

module.exports = routes;
