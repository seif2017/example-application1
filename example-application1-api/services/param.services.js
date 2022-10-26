const db = require("../models");

const logs = require("../logging/log-service");
const CustomError = require("../errors/custom-error.model");
const { DATABASE_ERROR, USER_NOT_FOUND } = require("../errors/error-codes");

exports.setParam = async (id, value) => {
  logs("[INFO]", "Setting param : ", id);
  const data = await db.params
    .findOrCreate({ where: { id: id }, defaults: { value: value } })
    .then((data) => {
      logs("[INFO]", "Set successfully");
      return data;
    })
    .catch((err) => {
      logs("[ERROR]", err);
      throw new CustomError(DATABASE_ERROR, err.name);
    });
  return data;
};

exports.getParams = async () => {
  logs("[INFO]", "Getting params ...");
  const params = await db.params.findAll().catch((err) => {
    throw new CustomError(DATABASE_ERROR, err.name);
  });
  return params;
};

exports.getParam = async (id) => {
  logs("[INFO]", "Getting params ...");
  const params = await db.params.findAll({ where: { id: id } }).catch((err) => {
    throw new CustomError(DATABASE_ERROR, err.name);
  });
  if (params.length == 0) throw new CustomError(USER_NOT_FOUND, "");
  else return { id: params[0].id, value: params[0].value };
};
