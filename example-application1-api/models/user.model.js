module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: { type: Sequelize.STRING, primaryKey: true },
        firstName: { type: Sequelize.STRING },
        lastName: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        birthDate: { type: Sequelize.DATE },
    });
  
    return User;
  };