require("../types/types.js");
const ProfessorRepository = require("../repositories/ProfessorRepository");

class ProfessorService {
  /**
   * Creates a professor
   *
   * @async
   * @param {PROFESSOR} professor
   * @returns {Promise<PROFESSOR>}
   */
  async create(professor) {
    return await ProfessorRepository.create(professor);
  }

  /**
   * Finds all professors including its dependency
   *
   * @async
   * @param {string | undefined} name
   * @returns {Promise<PROFESSOR[] | []>}
   */
  async findAll(name) {
    name = name && name.trim();

    if (!name) return await ProfessorRepository.findAll();

    return await ProfessorRepository.findByName(name);
  }

  /**
   * Finds all professors by department id including its dependency
   *
   * @async
   * @param {number} departmentId
   * @returns {Promise<PROFESSOR[] | []>}
   */
  async findByDepartment(departmentId) {
    return await ProfessorRepository.findByDepartment(departmentId);
  }

  /**
   * Finds a professor by its id including its dependency
   *
   * @async
   * @param {number} id
   * @returns {Promise<PROFESSOR | null>}
   */
  async findById(id) {
    return await ProfessorRepository.findById(id);
  }

  /**
   * Updates a professor
   *
   * @async
   * @param {PROFESSOR} professor
   * @returns {Promise<PROFESSOR | null>}
   */
  async update(professor) {
    return await ProfessorRepository.update(professor);
  }

  /**
   * Delete all professors in batch
   *
   * @async
   */
  async deleteAll() {
    await ProfessorRepository.deleteAll();
  }

  /**
   * Delete a professor by its id
   *
   * @async
   * @param {number} id
   */
  async deleteById(id) {
    await ProfessorRepository.deleteById(id);
  }
}

module.exports = new ProfessorService();
