const connectorsServices = require("../services/connectors.services");
const { logs } = require("../logging/logService");
const error = require("../errors/error");



exports.callConnector = async (req, res, next) => {
  const connector_name = req.params.connector_name;

  await connectorsServices
    .callConnector(connector_name)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};