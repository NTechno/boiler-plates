const httpStatus = require('http-status');
const { Teacher } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Teacher
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createTeacher = async (TeacherBody) => {  
  if (await Teacher.isEmailTaken(TeacherBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  return Teacher.create(TeacherBody);
};

/**
 * Query for Teachers
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryTeachers = async (filter, options) => {  
  const Teachers = await Teacher.paginate(filter, options);
  return Teachers;
};

/**
 * Get Teacher by id
 * @param {ObjectId} id
 * @returns {Promise<Teacher>}
 */
const getTeacherById = async (id) => {  
  const TeacherData = Teacher.findById(id);
  return TeacherData;
};

/**
 * Get Teacher by email
 * @param {string} email
 * @returns {Promise<Teacher>}
 */
const getTeacherByEmail = async (email) => {
  return Teacher.findOne({ email });
};

/**
 * Update Teacher by id
 * @param {ObjectId} TeacherId
 * @param {Object} updateBody
 * @returns {Promise<Teacher>}
 */
const updateTeacherById = async (TeacherId, updateBody) => {
  const Teacher = await getTeacherById(TeacherId);
  if (!Teacher) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Teacher not found');
  }
  if (updateBody.email && (await Teacher.isEmailTaken(updateBody.email, TeacherId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(Teacher, updateBody);
  await Teacher.save();
  return Teacher;
};

/**
 * Delete Teacher by id
 * @param {ObjectId} TeacherId
 * @returns {Promise<Teacher>}
 */
const deleteTeacherById = async (TeacherId) => {
  const Teacher = await getTeacherById(TeacherId);
  if (!Teacher) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Teacher not found');
  }
  await Teacher.remove();
  return Teacher;
};

module.exports = {
  createTeacher,
  queryTeachers,
  getTeacherById,
  getTeacherByEmail,
  updateTeacherById,
  deleteTeacherById,
};
