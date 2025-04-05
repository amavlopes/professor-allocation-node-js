const express = require("express");
const routes = express.Router();

const HttpStatus = require("../constants/HttpStatus");
const CourseRepository = require("../repositories/CourseRepository");

routes.post("/", async (req, res) => {
  const { name } = req.body;

  try {
    let course = await CourseRepository.create({ name });

    return res.status(HttpStatus.CREATED).json(course);
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
});

routes.get("/", async (req, res) => {
  let { name } = req.query;
  let courses = !name
    ? await CourseRepository.findAll()
    : await CourseRepository.findByName(name);

  return res.status(HttpStatus.OK).json(courses);
});

routes.get("/:course_id", async (req, res) => {
  const { course_id } = req.params;

  let course = await CourseRepository.findById(course_id);
  if (!course) return res.status(HttpStatus.NOT_FOUND).send();

  return res.status(HttpStatus.OK).json(course);
});

routes.put("/:course_id", async (req, res) => {
  const { course_id } = req.params;
  const { name } = req.body;

  try {
    let course = await CourseRepository.update({
      name,
      id: course_id,
    });

    if (!course) return res.status(HttpStatus.NOT_FOUND).send();

    return res.status(HttpStatus.OK).json(course);
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
});

routes.delete("/", async (req, res) => {
  await CourseRepository.deleteAll();

  return res.status(HttpStatus.NO_CONTENT).send();
});

routes.delete("/:course_id", async (req, res) => {
  const { course_id } = req.params;

  await CourseRepository.deleteById(course_id);

  return res.status(HttpStatus.NO_CONTENT).send();
});

module.exports = routes;
