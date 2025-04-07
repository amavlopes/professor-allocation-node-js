const express = require("express");
const routes = express.Router();

const ProfessorController = require("../controllers/ProfessorController");

routes.post("/", ProfessorController.create);
routes.get("/", ProfessorController.findAll);
routes.get("/:professor_id", ProfessorController.findById);
routes.get("/department/:department_id", ProfessorController.findByDepartment);
routes.put("/:professor_id", ProfessorController.update);
routes.delete("/", ProfessorController.deleteAll);
routes.delete("/:professor_id", ProfessorController.deleteById);

module.exports = routes;
