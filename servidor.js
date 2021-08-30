const express = require('express');
const cors = require('cors');
const app = express();

const api = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666";

app.use(express.json());

app.use((req, res, next) => {
    //console.log("Acessou o Middleware!");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});