const HttpStatus = require("../constants/HttpStatus");
const AllocationService = require("../services/AllocationService");

class AllocationController {
  static async create(req, res) {
    const { day, startHour, endHour, courseId, professorId } = req.body;
    const request = { day, startHour, endHour, courseId, professorId };

    try {
      let allocation = await AllocationService.create(request);

      return res.status(HttpStatus.CREATED).json(allocation);
    } catch (e) {
      throw new Error(JSON.stringify(e));
    }
  }

  static async findAll(req, res) {
    let allocations = await AllocationService.findAll();

    return res.status(HttpStatus.OK).json(allocations);
  }

  static async findByProfessor(req, res) {
    const { professor_id } = req.params;
    const allocations = await AllocationService.findByProfessor(professor_id);

    return res.status(HttpStatus.OK).json(allocations);
  }

  static async findByCourse(req, res) {
    const { course_id } = req.params;
    const courses = await AllocationService.findByCourse(course_id);

    return res.status(HttpStatus.OK).json(courses);
  }

  static async findById(req, res) {
    const { allocation_id } = req.params;

    let allocation = await AllocationService.findById(allocation_id);
    if (!allocation) return res.status(HttpStatus.NOT_FOUND).send();

    return res.status(HttpStatus.OK).json(allocation);
  }

  static async update(req, res) {
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
  }

  static async deleteAll(req, res) {
    await AllocationService.deleteAll();

    return res.status(HttpStatus.NO_CONTENT).send();
  }

  static async deleteById(req, res) {
    const { allocation_id } = req.params;

    await AllocationService.deleteById(allocation_id);

    return res.status(HttpStatus.NO_CONTENT).send();
  }
}

module.exports = AllocationController;
