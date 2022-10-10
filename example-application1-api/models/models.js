const Sequelize = require("sequelize");

const db = new Sequelize("db_test", "sa", "p@ssw0rd", {
  host: "mssql",
  dialect: "mssql",
  timezone: "Africa/Tunis",
});

const User = db.define("user", {
  id: { type: Sequelize.STRING, primaryKey: true },
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  birthDate: { type: Sequelize.DATE },
});

const Gouvernorat = db.define("gouvernorat", {
  code: { type: Sequelize.STRING, primaryKey: true },
  libelle: { type: Sequelize.STRING },
});

console.log("before DB SYNC");
db.sync();
console.log("after DB SYNC");

Gouvernorat.create({ code: "1000", libelle: "TUNIS" }).catch(err => {});
Gouvernorat.create({ code: "1100", libelle: "ARIANA" }).catch(err => {});

module.exports = { User, Gouvernorat };
