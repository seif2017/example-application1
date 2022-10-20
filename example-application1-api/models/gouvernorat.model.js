module.exports = (sequelize, Sequelize) => {
  const Gouvernorat = sequelize.define("gouvernorat", {
    code: { type: Sequelize.STRING, primaryKey: true },
    libelle: { type: Sequelize.STRING },
  });

  return Gouvernorat;
};
