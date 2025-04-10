require("../types/types.js");
const CourseRepository = require("../repositories/CourseRepository");

class CourseService {
  /**
   * Creates a course
   *
   * @async
   * @param {COURSE} course
   * @returns {Promise<COURSE>}
   */
  async create(course) {
    return await CourseRepository.create(course);
  }

  /**
   * Finds all courses
   *
   * @async
   * @param {string | undefined} name
   * @returns {Promise<COURSE[] | []>}
   */
  async findAll(name) {
    name = name && name.trim();

    if (!name) return await CourseRepository.findAll();

    return await CourseRepository.findByName(name);
  }

  /**
   * Finds a course by its id
   *
   * @async
   * @param {number} id
   * @returns {Promise<COURSE | null>}
   */
  async findById(id) {
    return await CourseRepository.findById(id);
  }

  /**
   * Updates a course
   *
   * @async
   * @param {COURSE} course
   * @returns {Promise<COURSE | null>}
   */
  async update(course) {
    return await CourseRepository.update(course);
  }

  /**
   * Delete all courses in batch
   *
   * @async
   */
  async deleteAll() {
    await CourseRepository.deleteAll();
  }

  /**
   * Delete a coourse by its id
   *
   * @async
   * @param {number} id
   */
  async deleteById(id) {
    await CourseRepository.deleteById(id);
  }
}

module.exports = new CourseService();
