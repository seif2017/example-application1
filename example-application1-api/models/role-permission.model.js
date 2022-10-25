
module.exports = (sequelize, Sequelize) => {
  const RolePermission = sequelize.define("role-permission", {
    // role: { type: Sequelize.STRING },
    permission: { type: Sequelize.STRING },

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

  return RolePermission;
};
