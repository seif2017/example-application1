const paramServices = require("../services/param.services");

exports.getParams = async (req, res, next) => {
  await paramServices
    .getParams()
    .then((params) => res.json(params))
    .catch((err) => next(err));
};

exports.getParam = async (req, res, next) => {
  const id = req.params.id;
  await paramServices
    .getParam(id)
    .then((params) => res.json(params))
    .catch((err) => next(err));
};

exports.setParam = async (req, res, next) => {
  const id = req.params.id;
  const value = req.params.value;
  console.log("******id*********", id)
  console.log("******param*********", value)
  await paramServices
    .setParam(id, value)
    .then((param) => res.json(param))
    .catch((err) => next(err));
};


