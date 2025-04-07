const express = require("express");
const routes = express.Router();

const DepartmentController = require("../controllers/DepartmentController");

routes.post("/", DepartmentController.create);
routes.get("/", DepartmentController.findAll);
routes.get("/:department_id", DepartmentController.findById);
routes.put("/:department_id", DepartmentController.update);
routes.delete("/", DepartmentController.deleteAll);
routes.delete("/:department_id", DepartmentController.deleteById);

module.exports = routes;
