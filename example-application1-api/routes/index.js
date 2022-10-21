const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
const miscRoutes = require("./misc.routes");
const connectorsRoutes = require("./connectors.routes");

router.use(userRoutes);
router.use(miscRoutes);
router.use(connectorsRoutes);

module.exports = router;
