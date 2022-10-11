const {logs} = require("../logging/logService"); 

exports.getDate = () => {
  // console.log(process.env.TZ)
  // process.env.TZ = 'Africa/Tunis';
  // console.log(process.env.TZ)

  const dt = new Date(); // ==> donne UTC   si process.env.TZ est vide
  logs("[INFO]",dt);
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

  logs("[INFO]",dat);
  return dat;
};

exports.getEnv = () => {
  const env = process.env.XXX;
  return env;
};
