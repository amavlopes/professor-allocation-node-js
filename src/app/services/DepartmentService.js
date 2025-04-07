const DepartmentRepository = require("../repositories/DepartmentRepository");

class DepartmentService {
  async create(department) {
    return await DepartmentRepository.create(department);
  }

  async findAll(name) {
    name = name && name.trim();

    if (!name) return await DepartmentRepository.findAll();

    return await DepartmentRepository.findByName(name);
  }

  async findById(id) {
    return await DepartmentRepository.findById(id);
  }

  async update(department) {
    return await DepartmentRepository.update(department);
  }

  async deleteAll() {
    await DepartmentRepository.deleteAll();
  }

  async deleteById(id) {
    await DepartmentRepository.deleteById(id);
  }
}

module.exports = new DepartmentService();
