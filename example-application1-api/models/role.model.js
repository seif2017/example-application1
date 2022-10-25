
module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("role", {
    role: { type: Sequelize.STRING, primaryKey: true },
    
    createdAt: {
      type: Sequelize.DATE,
      get() {
        dat = this.getDataValue("createdAt");
        if (dat) dat = dat.toLocaleString("sv-SE");
        return dat;
      },
    },
    updatedAt: {
      type: Sequelize.DATE,
      get() {
        dat = this.getDataValue("updatedAt");
        if (dat) dat = dat.toLocaleString("sv-SE");
        return dat;
      },
    },

  });
  


  return Role;
};
