const user_services = require("../services/user_services");
const other_services = require("../services/other_services");
const { logs } = require("../logging/logService");
const error = require("../errors/error");

exports.getUsers = async (req, res, next) => {
  await user_services
    .getUsers()
    .then((users) => res.json(users))
    .catch((err) => next(err));
};

exports.deleteUser = async (req, res, next) => {
  const id = req.params.id;
  await user_services
    .deleteUser(id)
    .then(() => res.json("user deleted"))
    .catch((err) => next(err));
};

exports.updateUser = async (req, res, next) => {
  const id = req.params.id;
  const user = req.body;

  await user_services
    .updateUser(id, user)
    .then((user) => res.json(user))
    .catch((err) => next(err));
};

exports.addUser = async (req, res, next) => {
  var user = req.body;
  if (!user.firstName) next(new error(13, "Missing firstName"));

  await user_services
    .addUser(user)
    .then((user) => res.json(user))
    .catch((err) => next(err));
};

exports.getDate = async (req, res, next) => {
  await other_services
    .getDate()
    .then((dat) => res.json(dat))
    .catch((err) => next(err));
};

exports.getEnv = async (req, res, next) => {
  await other_services
    .getEnv()
    .then((env) => res.json(env))
    .catch((err) => next(err));
};
