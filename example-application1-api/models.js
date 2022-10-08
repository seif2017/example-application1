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
  birthDate : {type: Sequelize.DATE},  
});
 
console.log("before DB SYNC");
db.sync();
console.log("after DB SYNC");

module.exports = { User };
