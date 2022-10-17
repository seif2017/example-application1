const models = require("../models/models");
const randomId = require("random-id");
const { logs } = require("../logging/logService");
const error = require("../errors/error");

// place holder for the data
// const users = [];

exports.addUser = (user) => {
  if (!user.id) user.id = randomId(10);
  logs("[INFO]", "Adding user : ", user);
  user = models.User.create(user);
  return user;

  // users.push(user);
};

exports.updateUser = (user) => {
  logs("[INFO]", "Updating user : ", user);
  user = models.User.updateUser(user);
  return user;
};

exports.deleteUser = async (id1) => {
  logs("[INFO]", "Deleting user : ", id1);
  const nb_affected = await models.User.destroy({
    where: {
      id: id1, //this will be your id that you want to delete
    },
  });
  logs("[INFO]", nb_affected, "rows affected");
  if (nb_affected == 0) throw new error(50, id1);
};

exports.getUsers = async () => {
  logs("[INFO]", "Getting users ...");
  var users = await models.User.findAll();
  return users;
};
