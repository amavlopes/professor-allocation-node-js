const { Op } = require("sequelize");
const Department = require("../models/Department");

class DepartmentRepository {
  async create(department) {
    return await Department.create(department);
  }

  async findAll() {
    return await Department.findAll({ raw: true });
  }

  async findByName(name) {
    return await Department.findAll({
      where: { name: { [Op.like]: "%" + name + "%" } },
      raw: true,
    });
  }

  async findById(id) {
    return await Department.findByPk(id, { raw: true });
  }

  async update(department) {
    const { id, name } = department;

    const rowsUpdated = await Department.update({ name }, { where: { id } });
    if (!rowsUpdated[0]) return null;

    return await this.findById(id);
  }

  async deleteAll() {
    await Department.destroy({ truncate: { cascade: true } });
  }

  async deleteById(id) {
    await Department.destroy({ where: { id } });
  }
}

module.exports = new DepartmentRepository();
