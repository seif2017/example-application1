const models = require("../models/models");
const randomId = require("random-id");
const { logs } = require("../logging/logService");

// place holder for the data
// const users = [];

exports.addUser = (user) => {
  user.id = randomId(10);
  // user.email = "a@a.com";
  logs("[INFO]", "Adding user : ", user);

  models.User.create(user);
  // users.push(user);
};

exports.getUsers = async () => {
  logs("[INFO]", "Getting users ...");
  const users = await models.User.findAll();
  return users;
};
