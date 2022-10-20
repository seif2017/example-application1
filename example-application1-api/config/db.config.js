module.exports = {
  HOST: "mssql",
  USER: "sa",
  PASSWORD: "p@ssw0rd",
  DB: "db_test",
  dialect: "mssql",
  timezone: "Africa/Tunis",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// const Sequelize = require("sequelize");
// const {logs} = require("../logging/logService");

// const db = new Sequelize("db_test", "sa", "p@ssw0rd", {
//   host: "mssql",
//   dialect: "mssql",
//   timezone: "Africa/Tunis",
// });

// module.exports db;
