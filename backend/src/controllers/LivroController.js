const Livro = require("../models/Livros");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
var mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

var schema = new mongoose.Schema({
    /* schema definition */
});
schema.plugin(mongoosePaginate);

var LivroPaginate = mongoose.model("Livro", schema); // Model.paginate()

module.exports = {
    // Lista os Livros do mais atual para o mais antigo
    async index(req, res) {
        const livros = await LivroPaginate.find().sort({ createdAt: -1 });
        return res.json(livros);
    },
    
    //gambiarra
    async storeImage(req, res) {
        const livro = await LivroPaginate.paginate(
            {},
            { limit: 1, sort: { createdAt: -1 } }
        );
        console.log(livro.docs[0]._id);
        const { filename: image } = req.file;

        const [name, ext] = image.split(".");
        const fileName = `${livro.docs[0]._id}.jpg`;

        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(path.resolve(req.file.destination, "resizes", fileName));

        fs.unlinkSync(req.file.path);
        const livro2 = await Livro.findByIdAndUpdate(
            livro.docs[0]._id,
            { image: `files/${livro.docs[0]._id}.jpg` },
            { new: true }
        );
        res.redirect("http://localhost:3000/listalivro");
    },

    // gravar os livros
    async store(req, res) {
        const {
            nomeLivro,
            author,
            numeroPaginas,
            editora,
            isbn,
        } = req.body.dados[0];

        await Livro.create({
            author,
            nomeLivro,
            numeroPaginas,
            editora,
            isbn,
        });
        return res.send("Livro salvo com sucesso!");
    },

    // Exclui o livro
    async destroy(req, res) {
        const { id } = req.params;
        await Livro.findByIdAndRemove(id);
        return res.send("Livro excluído com sucesso!");
    },

    // Altera o livro
    async update(req, res) {},
};
