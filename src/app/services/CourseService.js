const CourseRepository = require("../repositories/CourseRepository");

class CourseService {
  async create(department) {
    return await CourseRepository.create(department);
  }

  async findAll(name) {
    name = name && name.trim();

    if (!name) return await CourseRepository.findAll();

    return await CourseRepository.findByName(name);
  }

  async findById(id) {
    return await CourseRepository.findById(id);
  }

  async update(department) {
    return await CourseRepository.update(department);
  }

  async deleteAll() {
    await CourseRepository.deleteAll();
  }

  async deleteById(id) {
    await CourseRepository.deleteById(id);
  }
}

module.exports = new CourseService();
