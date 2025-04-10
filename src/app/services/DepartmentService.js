require("../types/types.js");
const DepartmentRepository = require("../repositories/DepartmentRepository");

class DepartmentService {
  /**
   * Creates a department
   *
   * @async
   * @param {DEPARTMENT} department
   * @returns {Promise<DEPARTMENT>}
   */
  async create(department) {
    return await DepartmentRepository.create(department);
  }

  /**
   * Finds all departments
   *
   * @async
   * @param {string | undefined} name
   * @returns {Promise<DEPARTMENT[] | []>}
   */
  async findAll(name) {
    name = name && name.trim();

    if (!name) return await DepartmentRepository.findAll();

    return await DepartmentRepository.findByName(name);
  }

  /**
   * Finds a department by its id
   *
   * @async
   * @param {number} id
   * @returns {Promise<DEPARTMENT | null>}
   */
  async findById(id) {
    return await DepartmentRepository.findById(id);
  }

  /**
   * Updates a department
   *
   * @async
   * @param {DEPARTMENT} department
   * @returns {Promise<DEPARTMENT | null>}
   */
  async update(department) {
    return await DepartmentRepository.update(department);
  }

  /**
   * Delete all departments in batch
   *
   * @async
   */
  async deleteAll() {
    await DepartmentRepository.deleteAll();
  }

  /**
   * Delete a department by its id
   *
   * @async
   * @param {number} id
   */
  async deleteById(id) {
    await DepartmentRepository.deleteById(id);
  }
}

module.exports = new DepartmentService();
