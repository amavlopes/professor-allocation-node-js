require("../types/types.js");
const AllocationRepository = require("../repositories/AllocationRepository");

class AllocationService {
  /**
   * Creates an allocation
   *
   * @async
   * @param {ALLOCATION} allocation
   */
  async create(allocation) {
    return await AllocationRepository.create(allocation);
  }

  /**
   * Finds all allocations including its dependencies
   *
   * @async
   * @returns {Promise<ALLOCATION[] | []>}
   */
  async findAll() {
    return await AllocationRepository.findAll();
  }

  /**
   * Finds all allocations by professor id including its dependencies
   *
   * @async
   * @param {number} professorId
   * @returns {Promise<ALLOCATION[] | []>}
   */
  async findByProfessor(professorId) {
    return await AllocationRepository.findByProfessor(professorId);
  }

  /**
   * Finds all allocations by course id including its dependencies
   *
   * @async
   * @param {number} courseId
   * @returns {Promise<ALLOCATION[] | []>}
   */
  async findByCourse(courseId) {
    return await AllocationRepository.findByCourse(courseId);
  }

  /**
   * Finds an allocation by its id including its dependencies
   *
   * @async
   * @param {number} id
   * @returns {Promise<ALLOCATION | null>}
   */
  async findById(id) {
    return await AllocationRepository.findById(id);
  }

  /**
   * Updates an allocation
   *
   * @async
   * @param {ALLOCATION} allocation
   * @returns {Promise<ALLOCATION | null>}
   */
  async update(allocation) {
    return await AllocationRepository.update(allocation);
  }

  /**
   * Delete all allocations in batch
   *
   * @async
   */
  async deleteAll() {
    await AllocationRepository.deleteAll();
  }

  /**
   * Delete an allocation by its id
   *
   * @async
   * @param {number} id
   */
  async deleteById(id) {
    await AllocationRepository.deleteById(id);
  }
}

module.exports = new AllocationService();
