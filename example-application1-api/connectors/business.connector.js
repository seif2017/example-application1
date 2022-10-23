const logs = require("../logging/log-service");
const fetch = require("node-fetch-commonjs");
const error = require("../errors/custom-error.model");

exports.config = {
  name: "business",
  isActive: true,
  dynamicList: true,
  listTtl: 60 * 60 * 1000,
  lastRefreshTime: "1970-01-01 00:00",
  timeout: 10 * 1000,
};

exports.billerList = [
  {
    code: "901",
    name: "TRUST-IT",
    isActive: true,
    url: "https://yesno.wtf/api",
    timeout: 10 * 1000,
    logo: "https://kkkk.gif",
  },
  {
    code: "902",
    name: "WE-SETTLE",
    isActive: true,
    url: "https://yesno.wtf/api",
    timeout: 10 * 1000,
    logo: "https://kkkk.gif",
  },
  {
    code: "903",
    name: "SMT",
    isActive: true,
    url: "https://yesno.wtf/api",
    timeout: 10 * 1000,
    logo: "https://kkkk.gif",
  },
];

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
