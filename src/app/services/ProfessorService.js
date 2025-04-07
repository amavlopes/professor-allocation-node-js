const ProfessorRepository = require("../repositories/ProfessorRepository");

class ProfessorService {
  async create(department) {
    return await ProfessorRepository.create(department);
  }

  async findAll(name) {
    name = name && name.trim();

    if (!name) return await ProfessorRepository.findAll();

    return await ProfessorRepository.findByName(name);
  }

  async findByDepartment(departmentId) {
    return await ProfessorRepository.findByDepartment(departmentId);
  }

  async findById(id) {
    return await ProfessorRepository.findById(id);
  }

  async update(department) {
    return await ProfessorRepository.update(department);
  }

  async deleteAll() {
    await ProfessorRepository.deleteAll();
  }

  async deleteById(id) {
    await ProfessorRepository.deleteById(id);
  }
}

module.exports = new ProfessorService();
