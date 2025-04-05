const express = require("express");
const routes = express.Router();

const HttpStatus = require("../constants/HttpStatus");
const ProfessorRepository = require("../repositories/ProfessorRepository");

routes.post("/", async (req, res) => {
  const { departmentId, name, cpf } = req.body;

  try {
    let professor = await ProfessorRepository.create({
      departmentId,
      name,
      cpf,
    });

    return res.status(HttpStatus.CREATED).json(professor);
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
});

routes.get("/", async (req, res) => {
  let { name } = req.query;
  let professors = !name
    ? await ProfessorRepository.findAll()
    : await ProfessorRepository.findByName(name);

  return res.status(HttpStatus.OK).json(professors);
});

routes.get("/:professor_id", async (req, res) => {
  const { professor_id } = req.params;

  let professor = await ProfessorRepository.findById(professor_id);
  if (!professor) return res.status(HttpStatus.NOT_FOUND).send();

  return res.status(HttpStatus.OK).json(professor);
});

routes.get("/department/:department_id", async (req, res) => {
  const { department_id } = req.params;
  const professors = await ProfessorRepository.findByDepartment(department_id);

  return res.status(HttpStatus.OK).json(professors);
});

routes.put("/:professor_id", async (req, res) => {
  const { professor_id } = req.params;
  const { name, cpf, departmentId } = req.body;
  const request = { id: professor_id, name, cpf, departmentId };

  try {
    let professor = await ProfessorRepository.update(request);
    if (!professor) return res.status(HttpStatus.NOT_FOUND).send();

    return res.status(HttpStatus.OK).json(professor);
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
});

routes.delete("/", async (req, res) => {
  await ProfessorRepository.deleteAll();

  return res.status(HttpStatus.NO_CONTENT).send();
});

routes.delete("/:professor_id", async (req, res) => {
  const { professor_id } = req.params;

  await ProfessorRepository.deleteById(professor_id);

  return res.status(HttpStatus.NO_CONTENT).send();
});

module.exports = routes;
