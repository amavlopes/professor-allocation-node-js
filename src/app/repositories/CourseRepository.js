require("../types/types.js");
const { Op } = require("sequelize");
const Course = require("../models/Course");

class CourseRepository {
  /**
   * Creates a course
   *
   * @async
   * @param {COURSE} course
   * @returns {Promise<COURSE>}
   */
  async create(course) {
    return await Course.create(course);
  }

  /**
   * Finds all courses
   *
   * @async
   * @returns {Promise<COURSE[] | []>}
   */
  async findAll() {
    return await Course.findAll({ raw: true });
  }

  /**
   * Finds all courses by name
   *
   * @async
   * @param {string} name
   * @returns {Promise<COURSE[] | []>}
   */
  async findByName(name) {
    return await Course.findAll({
      where: { name: { [Op.like]: "%" + name + "%" } },
      raw: true,
    });
  }

  /**
   * Finds a course by its id
   *
   * @async
   * @param {number} id
   * @returns {Promise<COURSE | null>}
   */
  async findById(id) {
    return await Course.findByPk(id, { raw: true });
  }

  /**
   * Updates a course
   *
   * @async
   * @param {COURSE} course
   * @returns {Promise<COURSE | null>}
   */
  async update(course) {
    const { id, name } = course;

    const rowsUpdated = await Course.update({ name }, { where: { id } });
    if (!rowsUpdated[0]) return null;

    return await this.findById(id);
  }

  /**
   * Delete all courses in batch
   *
   * @async
   */
  async deleteAll() {
    await Course.destroy({ truncate: { cascade: true } });
  }

  /**
   * Delete a coourse by its id
   *
   * @async
   * @param {number} id
   */
  async deleteById(id) {
    await Course.destroy({ where: { id } });
  }
}

module.exports = new CourseRepository();
