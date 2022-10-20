const miscServices = require("../services/misc.services");
const { logs } = require("../logging/logService");
const error = require("../errors/error");


exports.getDate = async (req, res, next) => {
  await miscServices
    .getDate()
    .then((dat) => res.json(dat))
    .catch((err) => next(err));
};

exports.getEnv = async (req, res, next) => {
  await miscServices
    .getEnv()
    .then((env) => res.json(env))
    .catch((err) => next(err));
};

exports.callApi = async (req, res, next) => {
  await miscServices
    .callApi()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};