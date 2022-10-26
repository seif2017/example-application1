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

db.params = require("./param.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.gouvernorats = require("./gouvernorat.model.js")(sequelize, Sequelize);
db.roles = require("./role.model.js")(sequelize, Sequelize);
db.rolesPermission = require("./role-permission.model.js")(
  sequelize,
  Sequelize
);

db.roles.hasMany(db.rolesPermission, { foreignKey: 'roleId'});
db.rolesPermission.belongsTo(db.roles, {foreignKey: 'roleId'});


initDatabase(db);

module.exports = db;
