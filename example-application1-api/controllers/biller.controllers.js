const billersServices = require("../services/biller.services");


exports.callBiller = async (req, res, next) => {
  const billerName = req.params.billerName;

  await billersServices
    .callBiller(billerName)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

exports.getBillers = async (req, res, next) => {
  await billersServices
    .getBillers()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

exports.getBiller = async (req, res, next) => {
  const billerName = req.params.billerName;
  await billersServices
    .getBiller(billerName)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
