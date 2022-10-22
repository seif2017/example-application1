const userServices = require("../services/user.services");
const  logs  = require("../logging/log-service");
const error = require("../errors/custom-error.model");
const { INVALID_REQUEST_BODY } = require("../errors/error-codes");
var util = require("util");

const Ajv = require("ajv");


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

  const userSchema = {
    type: "object",
    properties: {
      firstName: { type: "string", maxLength:10 },
      // firstName: { type: "string" },
      lastName: { type: "string" },
      email: { type: "string" },
      birthDate: { type: "string" },
      id: { type: "string" },
    },
    required: ["firstName", "lastName", "email", "id"],
    additionalProperties: false,
  };

  logs("befor validate")
  const ajv = new Ajv();
  const valid = ajv.validate(userSchema, user);
  logs("after validate")

  if (!valid)
    next(new error(INVALID_REQUEST_BODY, util.format(ajv.errors)));

  if (!user.firstName)
    next(new error(INVALID_REQUEST_BODY, "Missing firstName"));

    logs("befor call service")

  await userServices
    .addUser(user)
    .then((user) => res.json(user))
    .catch((err) => next(err));
};
