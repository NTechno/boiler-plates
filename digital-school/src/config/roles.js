const allRoles = {
  user: ['getUsers', 'manageTeachers', 'getTeachers'],
  admin: ['getUsers', 'manageUsers', 'getTeachers', 'manageTeachers'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
