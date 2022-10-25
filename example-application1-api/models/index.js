const dbConfig = require("../config/db.config.js");
const initDatabase = require("./initDatabase");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.gouvernorats = require("./gouvernorat.model.js")(sequelize, Sequelize);
db.roles = require("./role.model.js")(sequelize, Sequelize);
db.rolesPermission = require("./role-permission.model.js")(
  sequelize,
  Sequelize
);

// db.rolesPermission.belongsTo(db.roles, { as: 'role', name : 'fk'} );
// db.roles.hasMany(db.rolesPermission, { foreignKey: 'role' });

db.roles.hasMany(db.rolesPermission, { foreignKey: 'roleId'});
db.rolesPermission.belongsTo(db.roles, {foreignKey: 'roleId'});


initDatabase(db);

module.exports = db;
