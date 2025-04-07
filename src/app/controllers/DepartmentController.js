const HttpStatus = require("../constants/HttpStatus");
const DepartmentService = require("../services/DepartmentService");

class DepartmentController {
  static async create(req, res) {
    const { name } = req.body;

    try {
      let department = await DepartmentService.create({ name });

      return res.status(HttpStatus.CREATED).json(department);
    } catch (e) {
      throw new Error(JSON.stringify(e));
    }
  }

  static async findAll(req, res) {
    let { name } = req.query;
    let departments = await DepartmentService.findAll(name);

    return res.status(HttpStatus.OK).json(departments);
  }

  static async findById(req, res) {
    const { department_id } = req.params;

    let department = await DepartmentService.findById(department_id);
    if (!department) return res.status(HttpStatus.NOT_FOUND).send();

    return res.status(HttpStatus.OK).json(department);
  }

  static async update(req, res) {
    const { department_id } = req.params;
    const { name } = req.body;

    try {
      let department = await DepartmentService.update({
        name,
        id: department_id,
      });

      if (!department) return res.status(HttpStatus.NOT_FOUND).send();

      return res.status(HttpStatus.OK).json(department);
    } catch (e) {
      throw new Error(JSON.stringify(e));
    }
  }

  static async deleteAll(req, res) {
    await DepartmentService.deleteAll();

    return res.status(HttpStatus.NO_CONTENT).send();
  }

  static async deleteById(req, res) {
    const { department_id } = req.params;

    await DepartmentService.deleteById(department_id);

    return res.status(HttpStatus.NO_CONTENT).send();
  }
}

module.exports = DepartmentController;
