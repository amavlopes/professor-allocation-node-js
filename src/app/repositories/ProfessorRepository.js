require("../types/types.js");
const { Op } = require("sequelize");
const Professor = require("../models/Professor");
const Department = require("../models/Department");

class ProfessorRepository {
  /**
   * Creates a professor
   *
   * @async
   * @param {PROFESSOR} professor
   * @returns {Promise<PROFESSOR>}
   */
  async create(professor) {
    return await Professor.create(professor);
  }

  /**
   * Finds all professors including its dependency
   *
   * @async
   * @returns {Promise<PROFESSOR[] | []>}
   */
  async findAll() {
    return await Professor.findAll({ include: Department });
  }

  /**
   * Finds all professors by name including its dependency
   *
   * @async
   * @param {string} name
   * @returns {Promise<PROFESSOR[] | []>}
   */
  async findByName(name) {
    return await Professor.findAll({
      where: { name: { [Op.like]: "%" + name + "%" } },
      include: Department,
    });
  }

  /**
   * Finds all professors by department id including its dependency
   *
   * @async
   * @param {number} departmentId
   * @returns {Promise<PROFESSOR[] | []>}
   */
  async findByDepartment(departmentId) {
    return await Professor.findAll({
      where: { departmentId },
      include: Department,
    });
  }

  /**
   * Finds a professor by its id including its dependency
   *
   * @async
   * @param {number} id
   * @returns {Promise<PROFESSOR | null>}
   */
  async findById(id) {
    return await Professor.findByPk(id, { include: Department });
  }

  /**
   * Updates a professor
   *
   * @async
   * @param {PROFESSOR} professor
   * @returns {Promise<PROFESSOR | null>}
   */
  async update(professor) {
    const { id } = professor;
    const request = { id, ...professor };

    const rowsUpdated = await Professor.update(request, { where: { id } });
    if (!rowsUpdated[0]) return null;

    return await this.findById(id);
  }

  /**
   * Delete all professors in batch
   *
   * @async
   */
  async deleteAll() {
    await Professor.destroy({ truncate: { cascade: true } });
  }

  /**
   * Delete a professor by its id
   *
   * @async
   * @param {number} id
   */
  async deleteById(id) {
    await Professor.destroy({ where: { id } });
  }
}

module.exports = new ProfessorRepository();
