import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default function Header() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button
                        variant="outlined"
                        style={{ marginRight: "10px" }}
                        color="inherit"
                        href="/listalivro"
                    >
                        Listar Livros
                    </Button>
                    <Button variant="outlined" color="inherit" href="/">
                        Cadastrar Livro
                    </Button>
                </Toolbar>
            </AppBar>
            <br />
        </div>
    );
}
