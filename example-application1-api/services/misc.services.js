const { logs } = require("../logging/logService");
const fetch = require("node-fetch-commonjs");
const error = require("../errors/error");

exports.getDate = async () => {
  // console.log(process.env.TZ)
  // process.env.TZ = 'Africa/Tunis';
  // console.log(process.env.TZ)
  logs("[INFO]", "process.env.TZ:", process.env.TZ);

  const dt = new Date(); // ==> donne UTC   si process.env.TZ est vide
  logs("[INFO]", "Server time:", dt);
  const dat =
    dt.toLocaleDateString("fr", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }) +
    " " +
    dt.toLocaleTimeString("fr", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  logs(
    "[INFO]",
    "Server formatted (toLocaleDateString, toLocaleTimeString, fr) time:",
    dat
  );
  return dat;
};

exports.getEnv = async () => {
  const env = process.env.XXX;
  logs("[INFO]", "Server env XXX:", env);
  return env;
};

exports.callApi = async () => {
  const connector_name = "CNX1";
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
