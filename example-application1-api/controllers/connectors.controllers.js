const connectorsServices = require("../services/connectors.services");
const  logs  = require("../logging/log-service");
const error = require("../errors/custom-error.model");



exports.callConnector = async (req, res, next) => {
  const connector_name = req.params.connector_name;

  await connectorsServices
    .callConnector(connector_name)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

exports.getConnectors = async (req, res, next) => {
  await connectorsServices
    .getConnectors()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};