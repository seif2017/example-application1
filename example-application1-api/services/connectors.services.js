const { logs } = require("../logging/logService");
const fetch = require("node-fetch-commonjs");
const error = require("../errors/error");
const connectors = require("../connectors");

exports.callConnector = async (connector_name) => {
  const connector = "[" + connector_name + "]";
  logs("[INFO]", connector, "Invoking connector:", connector_name);
  const data = await connectors.callApi(connector_name);
  logs("[INFO]", connector, "Response:", data);
  return data;
};
