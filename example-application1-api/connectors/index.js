const { logs } = require("../logging/logService");
const error = require("../errors/error");

const connector1 = require("./connector.1");
const connector2 = require("./connector.2");

exports.callApi = async (connector_name) => {
  var connector_function = "";
  if (connector_name === "CNX1") connector_function = connector1;
  if (connector_name === "CNX2") connector_function = connector2;
  if (!connector_function) throw new error(99, "Invalid connector_function");
  const data = await connector_function.callApi();
  return data;
};

exports.getConnectors = async () => {
  return ["CNX1", "CNX2"];
};
