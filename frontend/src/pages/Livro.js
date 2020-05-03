import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

class Livro extends Component {
    constructor(props) {
        super(props);
        this.onChangeNomeLivro = this.onChangeNomeLivro.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeNumeroPaginas = this.onChangeNumeroPaginas.bind(this);
        this.onChangeEditora = this.onChangeEditora.bind(this);
        this.onChangeIsbn = this.onChangeIsbn.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            nomeLivro: "",
            author: "",
            numeroPaginas: "",
            editora: "",
            isbn: "",
            image: "",
        };
    }

    onChangeNomeLivro = (e) => {
        this.setState({ nomeLivro: e.target.value });
    };

    onChangeAuthor = (e) => {
        this.setState({ author: e.target.value });
    };

    onChangeNumeroPaginas = (e) => {
        this.setState({ numeroPaginas: e.target.value });
    };

    onChangeEditora = (e) => {
        this.setState({ editora: e.target.value });
    };

    onChangeIsbn = (e) => {
        this.setState({ isbn: e.target.value });
    };

    onChangeImage = (e) => {
        this.setState({ image: e.target.files[0] });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let dados = [];
        dados.push({
            nomeLivro: this.state.nomeLivro,
            author: this.state.author,
            numeroPaginas: this.state.numeroPaginas,
            editora: this.state.editora,
            isbn: this.state.isbn,
            image: "",
        });
        axios.post("http://localhost:3333/livro", { dados });
        document.getElementById("FormCadastro").submit();
    };

    render() {
        return (
            <div>
                <h1 align="center">Cadastro de Livros</h1>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={3} justify="center">
                        <Grid item xs={8}>
                            <TextField
                                label="Nome do Livro"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                onChange={(e) => this.onChangeNomeLivro(e)}
                                value={this.state.nomeLivro}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justify="center">
                        <Grid item xs={8}>
                            <TextField
                                label="Autor"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                onChange={(e) => this.onChangeAuthor(e)}
                                value={this.state.author}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justify="center">
                        <Grid item xs={8}>
                            <TextField
                                label="Número de Páginas"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                onChange={(e) => this.onChangeNumeroPaginas(e)}
                                value={this.state.numeroPaginas}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justify="center">
                        <Grid item xs={8}>
                            <TextField
                                label="Editora"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                onChange={(e) => this.onChangeEditora(e)}
                                value={this.state.editora}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justify="center">
                        <Grid item xs={8}>
                            <TextField
                                label="ISBN"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                onChange={(e) => this.onChangeIsbn(e)}
                                value={this.state.isbn}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justify="center">
                        <Grid item xs={8}>
                            <label htmlFor="image">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    component="span"
                                >
                                    Upload de Imagem do Livro
                                </Button>
                            </label>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justify="center">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ marginTop: "20px", marginBottom: "20px" }}
                        >
                            Cadastrar Livro
                        </Button>
                    </Grid>
                </form>
                <form
                    action={"http://localhost:3333/livrosImage"}
                    method="POST"
                    encType="multipart/form-data"
                    id="FormCadastro"
                >
                    <input
                        accept="image/*"
                        id="image"
                        name="image"
                        type="file"
                        style={{ display: "none" }}
                        //onChange={(e) => this.onChangeImage(e)}
                        //value={this.state.filename}
                    />
                </form>
            </div>
        );
    }
}

export default Livro;
