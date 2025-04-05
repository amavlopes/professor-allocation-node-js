const express = require("express");
const routes = express.Router();

const HttpStatus = require("../constants/HttpStatus");
const DepartmentRepository = require("../repositories/DepartmentRepository");

routes.post("/", async (req, res) => {
  const { name } = req.body;

  try {
    let department = await DepartmentRepository.create({ name });

    return res.status(HttpStatus.CREATED).json(department);
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
});

routes.get("/", async (req, res) => {
  let { name } = req.query;
  let departments = !name
    ? await DepartmentRepository.findAll()
    : await DepartmentRepository.findByName(name);

  return res.status(HttpStatus.OK).json(departments);
});

routes.get("/:department_id", async (req, res) => {
  const { department_id } = req.params;

  let department = await DepartmentRepository.findById(department_id);
  if (!department) return res.status(HttpStatus.NOT_FOUND).send();

  return res.status(HttpStatus.OK).json(department);
});

routes.put("/:department_id", async (req, res) => {
  const { department_id } = req.params;
  const { name } = req.body;

  try {
    let department = await DepartmentRepository.update({
      name,
      id: department_id,
    });

    if (!department) return res.status(HttpStatus.NOT_FOUND).send();

    return res.status(HttpStatus.OK).json(department);
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
});

routes.delete("/", async (req, res) => {
  await DepartmentRepository.deleteAll();

  return res.status(HttpStatus.NO_CONTENT).send();
});

routes.delete("/:department_id", async (req, res) => {
  const { department_id } = req.params;

  await DepartmentRepository.deleteById(department_id);

  return res.status(HttpStatus.NO_CONTENT).send();
});

module.exports = routes;
