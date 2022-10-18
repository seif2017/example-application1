const user_services = require("../services/user_services");
const other_services = require("../services/other_services");
const { logs } = require("../logging/logService");
const error = require("../errors/error");

exports.getUsers = async (req, res, next) => {
  const users = await user_services.getUsers();
  res.json(users);
};

exports.deleteUser = async (req, res, next) => {
  const result = await user_services.deleteUser(req.params.id)
  .then(() => {
    res.json("user deleted");
  }).catch((err) => {
    next(err);
  });
};

exports.updateUser = async (req, res, next) => {
  var user = req.body;
  const result = await user_services.updateUser(user);
  res.json("user updated");
};

exports.addUser = async (req, res, next) => {
  var user = req.body;
  if (!user.firstName) next(new error(13, "Missing firstName"));

  await user_services
    .addUser(user)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getDate = (req, res, next) => {
  const dat = other_services.getDate();
  res.json(dat);
};

exports.getEnv = (req, res, next) => {
  const env = other_services.getEnv();
  res.json(env);
};
