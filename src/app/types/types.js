/**
 * @typedef  {object} DEPARTMENT
 * @property {number} [id]      
 * @property {string} name    
 * @property {string} [createdAt]
 * @property {string} [updatedAt]      
 * /

/**
 * @typedef  {object} PROFESSOR
 * @property {number} [id]
 * @property {number} departmentId
 * @property {string} name
 * @property {string} cpf
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 */

/**
 * @typedef  {object} COURSE
 * @property {number} [id]
 * @property {string} name
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 */

/**
 *
 * @typedef {Object} ALLOCATION
 * @property {number} [id]
 * @property {number} professorId
 * @property {number} courseId
 * @property {number} day         - Day of week: accepts values from 1 to 7
 * @property {string} startHour
 * @property {string} endHour
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 */
