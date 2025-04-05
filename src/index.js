require("dotenv/config");
const express = require("express");
const sequelize = require("./db/conn");

const Department = require("./app/models/Department");
const Professor = require("./app/models/Professor");
const Course = require("./app/models/Course");
const Allocation = require("./app/models/Allocation");

const departmentRoutes = require("./app/routes/departmentRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.use("/departments", departmentRoutes);

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
