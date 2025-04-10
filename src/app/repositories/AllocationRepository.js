require("../types/types.js");
const Allocation = require("../models/Allocation");

class AllocationRepository {
  /**
   * Creates an allocation
   *
   * @async
   * @param { ALLOCATION } allocation
   * @returns {Promise<ALLOCATION>}
   */
  async create(allocation) {
    return await Allocation.create(allocation);
  }

  /**
   * Finds all allocations including its dependencies
   *
   * @async
   * @returns {Promise<ALLOCATION[] | []>}
   */
  async findAll() {
    return await Allocation.findAll({ include: { all: true } });
  }

  /**
   * Finds all allocations by professor id including its dependencies
   *
   * @async
   * @param {number} professorId
   * @returns {Promise<ALLOCATION[] | []>}
   */
  async findByProfessor(professorId) {
    return await Allocation.findAll({
      where: {
        professorId,
      },
      include: { all: true },
    });
  }

  /**
   * Finds all allocations by course id including its dependencies
   *
   * @async
   * @param {number} courseId
   * @returns {Promise<ALLOCATION[] | []>}
   */
  async findByCourse(courseId) {
    return await Allocation.findAll({
      where: {
        courseId,
      },
      include: { all: true },
    });
  }

  /**
   * Finds an allocation by its id including its dependencies
   *
   * @async
   * @param {number} id
   * @returns {Promise<ALLOCATION | null>}
   */
  async findById(id) {
    return await Allocation.findByPk(id, { include: { all: true } });
  }

  /**
   * Updates an allocation
   *
   * @async
   * @param {ALLOCATION} allocation
   * @returns {Promise<ALLOCATION | null>}
   */
  async update(allocation) {
    const { id } = allocation;
    const request = { id, ...allocation };

    const rowsUpdated = await Allocation.update(request, { where: { id } });
    if (!rowsUpdated[0]) return null;

    return await this.findById(id);
  }

  /**
   * Delete all allocations in batch
   *
   * @async
   */
  async deleteAll() {
    await Allocation.destroy({ truncate: { cascade: true } });
  }

  /**
   * Delete an allocation by its id
   *
   * @async
   * @param {number} id
   */
  async deleteById(id) {
    await Allocation.destroy({ where: { id } });
  }
}

module.exports = new AllocationRepository();
