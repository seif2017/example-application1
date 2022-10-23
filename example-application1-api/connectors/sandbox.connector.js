const logs = require("../logging/log-service");
const fetch = require("node-fetch-commonjs");
const error = require("../errors/custom-error.model");

exports.config = {
  name: "sandbox",
  isActive: true,
  dynamicList: false,
};

exports.billerList = [
  {
    code: "s700",
    name: "STEG-SANDBOX",
    isActive: true,
    url: "https://yesno.wtf/api",
    logo: "https://kkkk.gif",
  },
  {
    code: "s500",
    name: "SONEDE-SANDBOX",
    isActive: true,
    url: "https://yesno.wtf/api",
    logo: "https://kkkk.gif",
  },
  {
    code: "s600",
    name: "TOPNET-SANDBOX",
    isActive: true,
    url: "https://yesno.wtf/api",
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
