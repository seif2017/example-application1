const { USER_CREATE, USER_DELETE } = require("./permissions");

const roles = {
  ADMIN: [USER_CREATE, USER_DELETE],
  MANAGER: [USER_CREATE, USER_DELETE],
  USER: [USER_CREATE, USER_DELETE],
};

module.exports = roles;
