module.exports = { 
  HOST: "mssql",
  USER: "sa",
  PASSWORD: "p@ssw0rd",
  DB: "db_test",
  dialect: "mssql",
  timezone: "+01:00",
  dialectOptions: {
    useUTC: false, //for reading from database
    dateStrings: false,
    timezone: "+01:00", 
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
