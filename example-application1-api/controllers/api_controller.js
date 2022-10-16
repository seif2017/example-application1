const user_services = require("../services/user_services");
const other_services = require("../services/other_services");
const { logs } = require("../logging/logService");
const error = require("../errors/error");

exports.getUsers = async (req, res) => {
  const users = await user_services.getUsers();
  res.json(users);
};

exports.addUser = async (req, res, next) => {
  var user = req.body;
  if (!user.firstName) next(new error(13, "Missing firstName"));

  user = await user_services
    .addUser(user)
    .then(() => {
      res.json(user);
    })
    .catch((err) => {
      next(new error(1));
    });
};

exports.getDate = (req, res) => {
  const dat = other_services.getDate();
  res.json(dat);
};

exports.getEnv = (req, res) => {
  const env = other_services.getEnv();
  res.json(env);
};
