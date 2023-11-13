import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Olá Mundo");
});

app.get("/user/:nome", (req, res) => {
    res.send({
        nome: req.params.nome
    });
});

app.listen(8080, () => {
    console.log('Servidor rodando')
});