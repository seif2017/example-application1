const logs = require("../logging/log-service");
const fetch = require("node-fetch-commonjs");
const error = require("../errors/custom-error.model");

exports.config = {
  name: "agg-v2",
  isActive: true,
  dynamicList: true,
  listTtl: 60 * 60 * 1000,
  lastRefreshTime: "1970-01-01 00:00",
};

exports.billerList = [];

exports.callApi = async (connectorName) => {
  const connector = "[" + connectorName + "]";
  const url = "https://yesno.wtf/api";
  logs("[INFO]", connector, "Fetching Url:", url);

  const res = await fetch(url).catch((err) => {
    logs("[ERROR]", connector, err);
    throw new error(CONNECTOR_ERROR, err.name);
  });
  const data = await res.json().catch((err) => {
    logs("[ERROR]", connector, err);
    throw new error(CONNECTOR_ERROR, err.name);
  });
  logs("[INFO]", connector, "Response:", data);

  return data;
};
