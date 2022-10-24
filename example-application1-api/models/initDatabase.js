const logs = require("../logging/log-service");

async function initDatabase(db) {
  await db.sequelize.sync();
  logs("[INFO]", "DB SYNC invoked");

  db.gouvernorats.findOrCreate({ where: { code: "1000", libelle: "TUNIS" } });
  db.gouvernorats.findOrCreate({ where: { code: "1100", libelle: "ARIANA" } });
 
  logs("[INFO]", "DB feeded");
}

module.exports = initDatabase;
