const models = require("../models/models");
const randomId = require("random-id");
const { logs } = require("../logging/logService");
const error = require("../errors/error");

// place holder for the data
// const users = [];

exports.addUser = (user) => {
  if (!user.id) user.id = randomId(10);
  logs("[INFO]", "Adding user : ", user);
  try {
    user = models.User.create(user);
    return user;
  } catch (er) {
    logs("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
    return new error(1);
  }
  // .catch((errrrr) => {
  //   //Code si la promesse a échoué
  //   logs("ERROOOOOOOOOR");
  //   throw new error(1);
  // });

  // users.push(user);
};

exports.getUsers = async () => {
  logs("[INFO]", "Getting users ...");
  const users = await models.User.findAll();
  return users;
};
