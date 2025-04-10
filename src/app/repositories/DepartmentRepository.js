require("../types/types.js");
const { Op } = require("sequelize");
const Department = require("../models/Department");

class DepartmentRepository {
  /**
   * Creates a department
   *
   * @async
   * @param {DEPARTMENT} department
   * @returns {Promise<DEPARTMENT>}
   */
  async create(department) {
    return await Department.create(department);
  }

  /**
   * Finds all departments
   *
   * @async
   * @returns {Promise<DEPARTMENT[] | []>}
   */
  async findAll() {
    return await Department.findAll({ raw: true });
  }

  /**
   * Finds all departments by name
   *
   * @async
   * @param {string} name
   * @returns {Promise<DEPARTMENT[] | []>}
   */
  async findByName(name) {
    return await Department.findAll({
      where: { name: { [Op.like]: "%" + name + "%" } },
      raw: true,
    });
  }

  /**
   * Finds a department by its id
   *
   * @async
   * @param {number} id
   * @returns {Promise<DEPARTMENT | null>}
   */
  async findById(id) {
    return await Department.findByPk(id, { raw: true });
  }

  /**
   * Updates a department
   *
   * @async
   * @param {DEPARTMENT} department
   * @returns {Promise<DEPARTMENT | null>}
   */
  async update(department) {
    const { id, name } = department;

    const rowsUpdated = await Department.update({ name }, { where: { id } });
    if (!rowsUpdated[0]) return null;

    return await this.findById(id);
  }

  /**
   * Delete all departments in batch
   *
   * @async
   */
  async deleteAll() {
    await Department.destroy({ truncate: { cascade: true } });
  }

  /**
   * Delete a department by its id
   *
   * @async
   * @param {number} id
   */
  async deleteById(id) {
    await Department.destroy({ where: { id } });
  }
}

module.exports = new DepartmentRepository();
