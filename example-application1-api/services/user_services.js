const models = require("../models/models");
const randomId = require("random-id");
const { logs } = require("../logging/logService");
const error = require("../errors/error");

// place holder for the data
// const users = [];

exports.addUser = async (user) => {
  if (!user.id) user.id = randomId(10);
  logs("[INFO]", "Adding user : ", user);
  user = await models.User.create(user).catch((err) => {
    logs("[ERROR]", "ADDING USER", err.name);
    if (err.name == "SequelizeUniqueConstraintError")
      throw new error(51, user.id); // user already exists
    throw new error(52, err.name); // database error
  });
  return user;
  // users.push(user);
};

exports.updateUser = async (id, user) => {
  logs("[INFO]", "Updating user : ", id);
  await models.User.update(user, { where: { id: id } }).then(
    (nbUpdated) => {
      if (nbUpdated[0] === 1) logs("[INFO]", "Updated successfully", nbUpdated);
      else throw new error(50, id); // user not found
    },
    (err) => {
      logs("[ERROR]", err);
      throw new error(52, err.name); // database error
    }
  );
  return user;
};

exports.deleteUser = async (id) => {
  logs("[INFO]", "Deleting user : ", id);
  await models.User.destroy({
    where: {
      id: id, //this will be your id that you want to delete
    },
  }).then(
    (rowDeleted) => {
      // rowDeleted will return number of rows deleted
      if (rowDeleted === 1) logs("[INFO]", "Deleted successfully");
      else throw new error(50, id); // user not found
    },
    (err) => {
      logs("[ERROR]", err);
      throw new error(52, err.name); // database error
    }
  );
};

exports.getUsers = async () => {
  logs("[INFO]", "Getting users ...");
  const users = await models.User.findAll().catch((err) => {
    throw new error(52, err.name);
  }); // database error
  return users;
};
