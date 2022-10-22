const  logs  = require("../logging/log-service");
const fetch = require("node-fetch-commonjs");
const error = require("../errors/custom-error.model");
const connectors = require("../connectors");

exports.callConnector = async (connector_name) => {
  logs("[INFO]", "Invoking connector:", connector_name);
  const data = await connectors.callApi(connector_name);
  return data;
};

exports.getConnectors = async () => {
  logs("[INFO]", "Getting connectors");
  const data = await connectors.getConnectors();
  return data;
};
