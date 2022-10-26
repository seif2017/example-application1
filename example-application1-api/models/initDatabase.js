const logs = require("../logging/log-service");
const { USER_CREATE, USER_DELETE } = require("./permission.model");

async function initDatabase(db) {
  await db.sequelize.sync({ force: true });
  logs("[INFO]", "DB SYNC invoked");

  db.params.findOrCreate({ where: { id: "PARAM1", value: "ABCDEF" } });

  db.gouvernorats.findOrCreate({ where: { code: "1000", libelle: "TUNIS" } });
  db.gouvernorats.findOrCreate({ where: { code: "1100", libelle: "ARIANA" } });
 
  db.roles.findOrCreate({ where: { role: "ADMIN" } });
  db.roles.findOrCreate({ where: { role: "MANAGER" } }); 
  db.roles.findOrCreate({ where: { role: "USER" } });

  db.rolesPermission.findOrCreate({ where: { roleId: "ADMIN" , permission:USER_CREATE} }); 
  db.rolesPermission.findOrCreate({ where: { roleId: "ADMIN" , permission:USER_DELETE} });
  db.rolesPermission.findOrCreate({ where: { roleId: "MANAGER" , permission:USER_CREATE} }); 
  db.rolesPermission.findOrCreate({ where: { roleId: "MANAGER" , permission:USER_DELETE} });
  db.rolesPermission.findOrCreate({ where: { roleId: "USER" , permission:USER_CREATE} });
  db.rolesPermission.findOrCreate({ where: { roleId: "USER" , permission:USER_DELETE} });

  logs("[INFO]", "DB feeded");
}

module.exports = initDatabase;
