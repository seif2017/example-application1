const db = require("../models");

const randomId = require("random-id");
const  logs  = require("../logging/log-service");
const CustomError = require("../errors/custom-error.model");
const {
  DATABASE_ERROR,
} = require("../errors/error-codes");


exports.login = async () => {
  logs("[INFO]", "Getting users ...");
  const users = await db.users.findAll().catch((err) => {
    throw new CustomError(DATABASE_ERROR, err.name);
  });
  return users;
};