const HttpStatus = require("../constants/HttpStatus");
const CourseService = require("../services/CourseService");

class CourseController {
  static async create(req, res) {
    const { name } = req.body;

    try {
      let course = await CourseService.create({ name });

      return res.status(HttpStatus.CREATED).json(course);
    } catch (e) {
      throw new Error(JSON.stringify(e));
    }
  }

  static async findAll(req, res) {
    let { name } = req.query;
    let courses = await CourseService.findAll(name);

    return res.status(HttpStatus.OK).json(courses);
  }

  static async findById(req, res) {
    const { course_id } = req.params;

    let course = await CourseService.findById(course_id);
    if (!course) return res.status(HttpStatus.NOT_FOUND).send();

    return res.status(HttpStatus.OK).json(course);
  }

  static async update(req, res) {
    const { course_id } = req.params;
    const { name } = req.body;

    try {
      let course = await CourseService.update({
        name,
        id: course_id,
      });

      if (!course) return res.status(HttpStatus.NOT_FOUND).send();

      return res.status(HttpStatus.OK).json(course);
    } catch (e) {
      throw new Error(JSON.stringify(e));
    }
  }

  static async deleteAll(req, res) {
    await CourseService.deleteAll();

    return res.status(HttpStatus.NO_CONTENT).send();
  }

  static async deleteById(req, res) {
    const { course_id } = req.params;

    await CourseService.deleteById(course_id);

    return res.status(HttpStatus.NO_CONTENT).send();
  }
}

module.exports = CourseController;
