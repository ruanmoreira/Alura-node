import express from "express";
import livroController from "../controllers/livrosController.js"
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", livroController.listarLivros)
    .get("/livros/busca", livroController.listarLivroPorEditora)
    .get("/livros/:id", livroController.ListarLivroPorId)
    .post("/livros", livroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)
export default router;