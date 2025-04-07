const { Op } = require("sequelize");
const Professor = require("../models/Professor");
const Department = require("../models/Department");

class ProfessorRepository {
  async create(professor) {
    return await Professor.create(professor);
  }

  async findAll() {
    return await Professor.findAll({ include: Department });
  }

  async findByName(name) {
    return await Professor.findAll({
      where: { name: { [Op.like]: "%" + name + "%" } },
      include: Department,
    });
  }

  async findByDepartment(departmentId) {
    return await Professor.findAll({
      where: { departmentId },
      include: Department,
    });
  }

  async findById(id) {
    return await Professor.findByPk(id, { include: Department });
  }

  async update(professor) {
    const { id } = professor;
    const request = { id, ...professor };

    const rowsUpdated = await Professor.update(request, { where: { id } });
    if (!rowsUpdated[0]) return null;

    return await this.findById(id);
  }

  async deleteAll() {
    await Professor.destroy({ truncate: { cascade: true } });
  }

  async deleteById(id) {
    await Professor.destroy({ where: { id } });
  }
}

module.exports = new ProfessorRepository();
