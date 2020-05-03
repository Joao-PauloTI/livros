import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class ListaLivro extends Component {
    constructor(props) {
        super(props);
        this.handleExcluir = this.handleExcluir.bind(this);
        this.receberDados = this.receberDados.bind(this);

        this.state = { dados: [] };
    }

    receberDados = () => {
        this.setState({ dados: [] });
        axios.get("http://localhost:3333/livros").then((res) => {
            console.log(res.data);
            this.setState({
                dados: res.data.map((livro, index) => {
                    return (
                        <Card style={{ margin: "20px", width: "30%", height: "30%" }}>
                            <CardMedia
                                style={{
                                    paddingTop: "56.25%"
                                }}
                                image={"http://localhost:3333/" + livro.image}
                                title="Imagem do Livro"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                    key={livro._id}
                                >
                                    {livro.nomeLivro}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    component="h3"
                                    key={livro._id}
                                >
                                    Autor: {livro.author}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    component="h3"
                                    key={livro._id}
                                >
                                    Nº de Páginas: {livro.numeroPaginas}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    component="h3"
                                    key={livro._id}
                                >
                                    Editora: {livro.editora}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    component="h3"
                                    key={livro._id}
                                >
                                    ISBN: {livro.isbn}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <form
                                    onSubmit={(e) =>
                                        this.handleExcluir(e, livro._id, index)
                                    }
                                >
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        key={livro._id}
                                    >
                                        Excluir
                                    </Button>
                                </form>
                            </CardActions>
                        </Card>
                    );
                }),
            });
        });
    };

    componentDidMount() {
        this.receberDados();
    }

    handleExcluir = (e, id, index) => {
        e.preventDefault();
        axios.delete(`http://localhost:3333/livro/${id}`).then((res) => {
            this.receberDados();
        });
    };

    render() {
        return (
            <div>
                <h1 align="center">Lista de Livros</h1>
                <br />
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="baseline"
                >
                    {this.state.dados}
                </Grid>
            </div>
        );
    }
}

export default ListaLivro;
