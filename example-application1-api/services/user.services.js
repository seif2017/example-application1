const db = require("../models");

const randomId = require("random-id");
const  logs  = require("../logging/log-service");
const CustomError = require("../errors/custom-error.model");
const {
  USER_ALREADY_EXISTS,
  DATABASE_ERROR,
  USER_NOT_FOUND,
} = require("../errors/error-codes");




// place holder for the data
// const users = [];

exports.addUser = async (user) => {
  if (!user.id) user.id = randomId(10);
  logs("[INFO]", "Adding user : ", user);
  user = await db.users.create(user).catch((err) => {
    logs("[ERROR]", "ADDING USER", err.name);
    if (err.name == "SequelizeUniqueConstraintError")
      throw new CustomError(USER_ALREADY_EXISTS, user.id);
    logs("[ERROR]", err);
    throw new CustomError(DATABASE_ERROR, err.name);
  });
  return user;
  // users.push(user);
};

exports.updateUser = async (id, user) => {
  logs("[INFO]", "Updating user : ", id);
  await db.users.update(user, { where: { id: id } }).then(
    (nbUpdated) => {
      if (nbUpdated[0] === 1) logs("[INFO]", "Updated successfully", nbUpdated);
      else throw new CustomError(USER_NOT_FOUND, id);
    },
    (err) => {
      logs("[ERROR]", err);
      throw new CustomError(DATABASE_ERROR, err.name);
    }
  );
  return user;
};

exports.deleteUser = async (id) => {
  logs("[INFO]", "Deleting user : ", id);
  await db.users
    .destroy({
      where: {
        id: id, //this will be your id that you want to delete
      },
    })
    .then(
      (rowDeleted) => {
        // rowDeleted will return number of rows deleted
        if (rowDeleted === 1) logs("[INFO]", "Deleted successfully");
        else throw new CustomError(USER_NOT_FOUND, id);
      },
      (err) => {
        logs("[ERROR]", err);
        throw new CustomError(DATABASE_ERROR, err.name);
      }
    );
};

exports.getUsers = async () => {
  logs("[INFO]", "Getting users ...");
  const users = await db.users.findAll().catch((err) => {
    throw new CustomError(DATABASE_ERROR, err.name);
  });
  return users;
};
