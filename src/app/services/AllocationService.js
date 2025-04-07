const AllocationRepository = require("../repositories/AllocationRepository");

class AllocationService {
  async create(department) {
    return await AllocationRepository.create(department);
  }

  async findAll() {
    return await AllocationRepository.findAll();
  }

  async findByProfessor(professorId) {
    return await AllocationRepository.findByProfessor(professorId);
  }

  async findByCourse(courseId) {
    return await AllocationRepository.findByCourse(courseId);
  }

  async findById(id) {
    return await AllocationRepository.findById(id);
  }

  async update(department) {
    return await AllocationRepository.update(department);
  }

  async deleteAll() {
    await AllocationRepository.deleteAll();
  }

  async deleteById(id) {
    await AllocationRepository.deleteById(id);
  }
}

module.exports = new AllocationService();
