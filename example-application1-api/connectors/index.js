const CustomError = require("../errors/custom-error.model");

const fs = require("fs");
const { INTERNAL_SERVER } = require("../errors/http-status-codes");

const connectors = [];
fs.readdirSync(__dirname)
  .filter((file) => file.includes("connector.js"))
  .forEach((file) => {
    connectors.push(require("./" + file));
  });
console.log("******connectors******", connectors);

function findConncetor(connectorName) {
  const list = connectors.filter((con) => con.config.name === connectorName);
  if (list.length == 0)
    throw new CustomError(
      INTERNAL_SERVER,
      "Invalid connector " + connectorName
    );
  return list[0];
}

exports.callApi = async (connectorName) => {
  const connector = findConncetor(connectorName);
  const data = await connector.callApi();
  return data;
};

exports.getConnectors = async () => {
  const list = [];
  for (const connector of connectors) {
    list.push(connector.config.name);
  }
  return list;
};

exports.getActiveConnectors = async () => {
  const list = [];
  for (const connector of connectors) {
    if (connector.config.isActive) list.push(connector.config.name);
  }
  return list;
};
