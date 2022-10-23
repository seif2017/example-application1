const logs = require("../logging/log-service");
const fetch = require("node-fetch-commonjs");
const error = require("../errors/custom-error.model");

exports.config = {
  name: "steg",
  isActive: true,
  dynamicList: false,
};

exports.billerList = [
  {
    code: "700",
    name: "STEG",
    isActive: true,
    url: "https://yesno.wtf/api",
    logo : "https://kkkk.gif"
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
