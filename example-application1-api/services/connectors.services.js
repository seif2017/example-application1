const  logs  = require("../logging/log-service");
const fetch = require("node-fetch-commonjs");
const error = require("../errors/custom-error.model");
const connectors = require("../connectors");

exports.callConnector = async (connectorName) => {
  logs("[INFO]", "Invoking connector:", connectorName);
  const data = await connectors.callApi(connectorName);
  return data;
};

exports.getConnectors = async () => {
  logs("[INFO]", "Getting connectors");
  const data = await connectors.getConnectors();
  return data;
};
