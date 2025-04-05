require("dotenv/config");
const express = require("express");
const sequelize = require("./db/conn");

const Department = require("./app/entity/Department");
const Professor = require("./app/entity/Professor");
const Course = require("./app/entity/Course");
const Allocation = require("./app/entity/Allocation");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

sequelize
  .sync()
  .then(() => {
    app.listen(process.env.APP_PORT, () =>
      console.log(
        `Servidor rodando em http://localhost:${process.env.APP_PORT}`
      )
    );
  })
  .catch((error) => console.log(`Erro ao sincronizar MySQL: ${error}`));
