const user_services = require("../services/user_services");
const other_services = require("../services/other_services");
const { logs } = require("../logging/logService");

exports.getUsers = async (req, res) => {
  const users = await user_services.getUsers();
  return users;
};

exports.addUser = (req, res) => {
  var user = req.body;
  user = user_services.addUser(user);
  return user;
};

exports.getDate = (req, res) => {
  const dat = other_services.getDate();
  return dat;
};

exports.getEnv = (req, res) => {
  const env = other_services.getEnv();
  return env;
};
