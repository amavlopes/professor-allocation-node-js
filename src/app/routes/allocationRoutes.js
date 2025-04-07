const express = require("express");
const routes = express.Router();

const HttpStatus = require("../constants/HttpStatus");
const AllocationService = require("../services/AllocationService");

routes.post("/", async (req, res) => {
  const { day, startHour, endHour, courseId, professorId } = req.body;
  const request = { day, startHour, endHour, courseId, professorId };

  try {
    let allocation = await AllocationService.create(request);

    return res.status(HttpStatus.CREATED).json(allocation);
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
});

routes.get("/", async (req, res) => {
  let allocations = await AllocationService.findAll();

  return res.status(HttpStatus.OK).json(allocations);
});

routes.get("/:allocation_id", async (req, res) => {
  const { allocation_id } = req.params;

  let allocation = await AllocationService.findById(allocation_id);
  if (!allocation) return res.status(HttpStatus.NOT_FOUND).send();

  return res.status(HttpStatus.OK).json(allocation);
});

routes.get("/professor/:professor_id", async (req, res) => {
  const { professor_id } = req.params;
  const allocations = await AllocationService.findByProfessor(professor_id);

  return res.status(HttpStatus.OK).json(allocations);
});

routes.get("/course/:course_id", async (req, res) => {
  const { course_id } = req.params;
  const courses = await AllocationService.findByCourse(course_id);

  return res.status(HttpStatus.OK).json(courses);
});

routes.put("/:allocation_id", async (req, res) => {
  const { allocation_id } = req.params;
  const { day, startHour, endHour, courseId, professorId } = req.body;
  const request = {
    id: allocation_id,
    day,
    startHour,
    endHour,
    courseId,
    professorId,
  };

  try {
    let allocation = await AllocationService.update(request);
    if (!allocation) return res.status(HttpStatus.NOT_FOUND).send();

    return res.status(HttpStatus.OK).json(allocation);
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
});

routes.delete("/", async (req, res) => {
  await AllocationService.deleteAll();

  return res.status(HttpStatus.NO_CONTENT).send();
});

routes.delete("/:allocation_id", async (req, res) => {
  const { allocation_id } = req.params;

  await AllocationService.deleteById(allocation_id);

  return res.status(HttpStatus.NO_CONTENT).send();
});

module.exports = routes;
