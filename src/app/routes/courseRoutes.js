const express = require("express");
const routes = express.Router();

const CourseController = require("../controllers/CourseController");

routes.post("/", CourseController.create);
routes.get("/", CourseController.findAll);
routes.get("/:course_id", CourseController.findById);
routes.put("/:course_id", CourseController.update);
routes.delete("/", CourseController.deleteAll);
routes.delete("/:course_id", CourseController.deleteById);

module.exports = routes;
