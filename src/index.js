const express = require("express");
require("dotenv/config");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.listen(process.env.APP_PORT, () =>
  console.log(`Servidor rodando em http://localhost:${process.env.APP_PORT}`)
);
