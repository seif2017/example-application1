const { logs } = require("../logging/logService");
const fetch = require("node-fetch-commonjs");
const error = require("../errors/error");

exports.callApi = async () => {
  const connector_name = "CNX2";
  const connector = "[" + connector_name + "]";
  const url = "https://yesno.wtf/api";
  logs("[INFO]", connector, "Invoking connector:", url);

  const res = await fetch(url).catch((err) => {
    logs("[ERROR]", connector, err);
    throw new error(54, err.name);
  }); // connector error
  const data = await res.json().catch((err) => {
    logs("[ERROR]", connector, err);
    throw new error(54, err.name);
  }); // connector error
  logs("[INFO]", connector, "Response:", data);

  return data;
};
