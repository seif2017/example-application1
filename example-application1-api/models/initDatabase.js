const  logs  = require("../logging/log-service");

async function initDatabase(db) {
  await db.sequelize.sync();
  logs("[INFO]", "DB SYNC invoked");
  
  db.gouvernorats.create({ code: "1000", libelle: "TUNIS" }).catch((err) => {});
  db.gouvernorats.create({ code: "1100", libelle: "ARIANA" }).catch((err) => {});
  logs("[INFO]", "DB feeded");
}

module.exports = initDatabase;
