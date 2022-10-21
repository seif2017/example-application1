const userServices = require("../services/user.services");
const { logs } = require("../logging/logService");
const error = require("../errors/error");

exports.getUsers = async (req, res, next) => {
  await userServices
    .getUsers()
    .then((users) => res.json(users))
    .catch((err) => next(err));
};

exports.deleteUser = async (req, res, next) => {
  const id = req.params.id;
  await userServices
    .deleteUser(id)
    .then(() => res.json("user deleted"))
    .catch((err) => next(err));
};

exports.updateUser = async (req, res, next) => {
  const id = req.params.id;
  const user = req.body;

  await userServices
    .updateUser(id, user)
    .then((user) => res.json(user))
    .catch((err) => next(err));
};

exports.addUser = async (req, res, next) => {
  var user = req.body;
  if (!user.firstName) next(new error(INVALID_REQUEST_BODY, "Missing firstName"));

  await userServices
    .addUser(user)
    .then((user) => res.json(user))
    .catch((err) => next(err));
};

