module.exports = (sequelize, Sequelize) => {
  const Param = sequelize.define("Param", {
    id: { type: Sequelize.STRING, primaryKey: true },
    value: { type: Sequelize.STRING },

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

  return Param;
};
