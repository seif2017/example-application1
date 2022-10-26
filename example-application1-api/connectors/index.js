const CustomError = require("../errors/custom-error.model");

const fs = require("fs");
const { INTERNAL_SERVER } = require("../errors/error-codes");

const connectors = [];
fs.readdirSync(__dirname)
  .filter((file) => file.includes("connector.js"))
  .forEach((file) => {
    connectors.push(require("./" + file));
  });

function findConnector(connectorName) {
  const list = connectors.filter((con) => con.config.name === connectorName);
  if (list.length == 0)
    throw new CustomError(
      INTERNAL_SERVER,
      "Invalid connector " + connectorName
    );
  return list[0];
}

exports.callApi = async (connectorName) => {
  const connector = findConnector(connectorName);
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

exports.getConnector = async (connectorName) => {
  const connector = findConnector(connectorName);
  return { config: connector.config, billerList: connector.billerList };
};

exports.getActiveConnectors = async () => {
  const list = [];
  for (const connector of connectors) {
    if (connector.config.isActive) list.push(connector.config.name);
  }
  return list;
};

exports.getBillers = async () => {
  const list = [];
  for (const connector of connectors) {
    list.push(...connector.billerList);
  }
  return list;
};

exports.getBiller = async (biller) => {
  b = findBiller(biller);
  return b;
};

function findBiller(billerName) {
  const list = [];
  for (const connector of connectors) {
    list.push(...connector.billerList);
  }
  const res = list.filter((b) => b.name == billerName);
  if (res.length == 0)
    throw new CustomError(INTERNAL_SERVER, "Invalid biller " + billerName);
  return list[0];
}

exports.callBillerApi = async (biller) => {
  b = findBiller(biller);
  const connector = findConnector(b.connectorName);
  const data = await connector.callApi();
  return data;
};
