const connectorsServices = require("../services/connector.services");
const logs = require("../logging/log-service");

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
  await connectorsServices
    .getConnector(connectorName)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
