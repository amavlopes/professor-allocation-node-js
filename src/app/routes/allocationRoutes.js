const express = require("express");
const routes = express.Router();

const AllocationController = require("../controllers/AllocationController");

routes.post("/", AllocationController.create);
routes.get("/", AllocationController.findAll);
routes.get("/:allocation_id", AllocationController.findById);
routes.get("/professor/:professor_id", AllocationController.findByProfessor);
routes.get("/course/:course_id", AllocationController.findByCourse);
routes.put("/:allocation_id", AllocationController.update);
routes.delete("/", AllocationController.deleteAll);
routes.delete("/:allocation_id", AllocationController.deleteById);

module.exports = routes;
