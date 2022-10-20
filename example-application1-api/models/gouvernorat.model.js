module.exports = (sequelize, Sequelize) => {
  const Gouvernorat = sequelize.define("gouvernorat", {
    code: { type: Sequelize.STRING, primaryKey: true },
    libelle: { type: Sequelize.STRING }, 
    createdAt: {
      type: Sequelize.DATE, 
      get() {
        return this.getDataValue("createdAt").toLocaleString("sv-SE");
      },
    }, 
    updatedAt: {
      type: Sequelize.DATE,
      get() {
        return this.getDataValue("updatedAt").toLocaleString("sv-SE");
      },
    },
  });

  return Gouvernorat;
};
