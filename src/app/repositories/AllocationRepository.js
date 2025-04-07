const Allocation = require("../models/Allocation");

class AllocationRepository {
  async create(allocation) {
    return await Allocation.create(allocation);
  }

  async findAll() {
    return await Allocation.findAll({ include: { all: true } });
  }

  async findByProfessor(professorId) {
    return await Allocation.findAll(
      {
        where: {
          professorId,
        },
      },
      { include: { all: true } }
    );
  }

  async findByCourse(courseId) {
    return await Allocation.findAll(
      {
        where: {
          courseId,
        },
      },
      { include: { all: true } }
    );
  }

  async findById(id) {
    return await Allocation.findByPk(id, { include: { all: true } });
  }

  async update(allocation) {
    const { id, day, startHour, endHour, courseId, professorId } = allocation;

    const rowsUpdated = await Allocation.update(
      { day, startHour, endHour, courseId, professorId },
      { where: { id } }
    );
    if (!rowsUpdated[0]) return null;

    return await this.findById(id);
  }

  async deleteAll() {
    await Allocation.destroy({ truncate: { cascade: true } });
  }

  async deleteById(id) {
    await Allocation.destroy({ where: { id } });
  }
}

module.exports = new AllocationRepository();
