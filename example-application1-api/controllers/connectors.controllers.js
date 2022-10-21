const connectorsServices = require("../services/connectors.services");
const { logs } = require("../logging/logService");
const error = require("../errors/error");



exports.callApi = async (req, res, next) => {
  await connectorsServices
    .callApi()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};