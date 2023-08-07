const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const validator = require('validator');
const bcrypt = require('bcryptjs');

const teacherSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid Email!!');
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-z A-Z]/)) {
          throw new Error('Password must contain atleast one number and one charecter');
        }
      },
      private: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestemps: true,
  }
);

// add plugin to convert mongose to JSON
teacherSchema.plugin(toJSON);
teacherSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
 teacherSchema.statics.isEmailTaken = async function (email, excludeUserId) {  
  const teacher = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!teacher;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
teacherSchema.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

teacherSchema.pre('save', async function (next) {
  const teacher = this;
  if (teacher.isModified('password')) {
    teacher.password = await bcrypt.hash(teacher.password, 8);
  }
  next();
});


/**
 * @typedef Teacher
 */
 const Teacher = mongoose.model('Teacher', teacherSchema);

 module.exports = Teacher;
 