const  logs  = require("../logging/log-service");
const fetch = require("node-fetch-commonjs");
const error = require("../errors/custom-error.model");

exports.getDate = async () => {
  // console.log(process.env.TZ)
  // process.env.TZ = 'Africa/Tunis';
  // console.log(process.env.TZ)
  logs("[INFO]", "process.env.TZ:", process.env.TZ);

  const dt = new Date(); // ==> donne UTC   si process.env.TZ est vide
  logs("[INFO]", "Server time:", dt);
  const dat = dt.toLocaleString("pt-BR"); // gives JJ/MM/AAAA HH:MM:SS

  logs(
    "[INFO]",
    "Server formatted (toLocaleString pt-BR ==> JJ/MM/AAAA HH:MM:SS) datetime:",
    dat
  );
  return dat;
};

exports.getEnv = async () => {
  const env = process.env.XXX;
  logs("[INFO]", "Server env XXX:", env);
  return env;
};


