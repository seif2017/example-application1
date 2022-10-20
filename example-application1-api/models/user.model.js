module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: { type: Sequelize.STRING, primaryKey: true },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    birthDate: {
      type: Sequelize.DATE,
      get() {
        return this.getDataValue("birthDate").toLocaleString("sv-SE");
      },
    },
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

  return User;
};
