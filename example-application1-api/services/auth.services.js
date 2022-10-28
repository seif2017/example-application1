const db = require("../models");

const randomId = require("random-id");
const logs = require("../logging/log-service");
const CustomError = require("../errors/custom-error.model");
const { DATABASE_ERROR,INVALID_LOGIN } = require("../errors/error-codes");

exports.login = async (id, password) => {
  logs("[INFO]", "User login ...", id, password);
  const users = await db.users
    .findAll({ where: { id: id, password: password } })
    .catch((err) => {
      throw new CustomError(DATABASE_ERROR, err.name);
    });
  if (users.length == 0) throw new CustomError(INVALID_LOGIN, "");
  else return { id: users[0].id, value: users[0].lastName };
};
