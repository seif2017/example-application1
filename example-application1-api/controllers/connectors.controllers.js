const connectorsServices = require("../services/connectors.services");
const logs = require("../logging/log-service");
const error = require("../errors/custom-error.model");

exports.callConnector = async (req, res, next) => {
  const connectorName = req.params.connectorName;

  await connectorsServices
    .callConnector(connectorName)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

exports.getConnectors = async (req, res, next) => {
  await connectorsServices
    .getConnectors()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

exports.getConnector = async (req, res, next) => {
  const connectorName = req.params.connectorName;
  console.log('------------',connectorName)
  await connectorsServices
    .getConnector(connectorName)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
