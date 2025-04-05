const { Op } = require("sequelize");
const Course = require("../models/Course");

class CourseRepository {
  async create(course) {
    return await Course.create(course);
  }

  async findAll() {
    return await Course.findAll({ raw: true });
  }

  async findByName(name) {
    return await Course.findAll({
      where: { name: { [Op.like]: "%" + name + "%" } },
      raw: true,
    });
  }

  async findById(id) {
    return await Course.findByPk(id, { raw: true });
  }

  async update(course) {
    const { id, name } = course;

    const rowsUpdated = await Course.update({ name }, { where: { id } });
    if (!rowsUpdated[0]) return null;

    return await this.findById(id);
  }

  async deleteAll() {
    await Course.destroy({ truncate: { cascade: true } });
  }

  async deleteById(id) {
    await Course.destroy({ where: { id } });
  }
}

module.exports = new CourseRepository();
