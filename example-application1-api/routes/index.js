const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
const miscRoutes = require("./misc.routes");
const connectorRoutes = require("./connector.routes");
const billerRoutes = require("./biller.routes");
const roleRoutes = require("./role.routes");

router.use(userRoutes);
router.use(miscRoutes);
router.use(connectorRoutes);
router.use(billerRoutes);
router.use(roleRoutes);

module.exports = router;
