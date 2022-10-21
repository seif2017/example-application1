const userServices = require("../services/user.services");
const { logs } = require("../logging/logService");
const error = require("../errors/error");
const { INVALID_REQUEST_BODY } = require("../errors/errorCodes");
var util = require("util");

const Ajv = require("ajv");
const ajv = new Ajv();

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
      firstName: { type: "string" },
      lastName: { type: "string" },
      email: { type: "string" },
      birthDate: { type: "string" },
      id: { type: "string" },
    },
    required: ["firstName", "lastName", "email", "id"],
    additionalProperties: false,
  };

  const valid = ajv.validate(userSchema, user);
  if (!valid)
    next(new error(INVALID_REQUEST_BODY, util.format(ajv.errors)));

  if (!user.firstName)
    next(new error(INVALID_REQUEST_BODY, "Missing firstName"));

  await userServices
    .addUser(user)
    .then((user) => res.json(user))
    .catch((err) => next(err));
};
