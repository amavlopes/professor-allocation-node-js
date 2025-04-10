require("../types/types.js");
const HttpStatus = require("../constants/HttpStatus");
const ProfessorService = require("../services/ProfessorService");

class ProfessorController {
  static async create(req, res) {
    const { departmentId, name, cpf } = req.body;
    /**
     * @type {PROFESSOR}
     */
    const request = { departmentId, name, cpf };

    try {
      let professor = await ProfessorService.create(request);

      return res.status(HttpStatus.CREATED).json(professor);
    } catch (e) {
      throw new Error(JSON.stringify(e));
    }
  }

  static async findAll(req, res) {
    let { name } = req.query;
    let professors = await ProfessorService.findAll(name);

    return res.status(HttpStatus.OK).json(professors);
  }

  static async findByDepartment(req, res) {
    const { department_id } = req.params;
    const professors = await ProfessorService.findByDepartment(department_id);

    return res.status(HttpStatus.OK).json(professors);
  }

  static async findById(req, res) {
    const { professor_id } = req.params;

    let professor = await ProfessorService.findById(professor_id);
    if (!professor) return res.status(HttpStatus.NOT_FOUND).send();

    return res.status(HttpStatus.OK).json(professor);
  }

  static async update(req, res) {
    const { professor_id } = req.params;
    const { name, cpf, departmentId } = req.body;
    /**
     * @type {PROFESSOR}
     */
    const request = { id: professor_id, name, cpf, departmentId };

    try {
      let professor = await ProfessorService.update(request);
      if (!professor) return res.status(HttpStatus.NOT_FOUND).send();

      return res.status(HttpStatus.OK).json(professor);
    } catch (e) {
      throw new Error(JSON.stringify(e));
    }
  }

  static async deleteAll(req, res) {
    await ProfessorService.deleteAll();

    return res.status(HttpStatus.NO_CONTENT).send();
  }

  static async deleteById(req, res) {
    const { professor_id } = req.params;

    await ProfessorService.deleteById(professor_id);

    return res.status(HttpStatus.NO_CONTENT).send();
  }
}

module.exports = ProfessorController;
