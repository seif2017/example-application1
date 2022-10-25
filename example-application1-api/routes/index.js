const express = require("express");
const router = express.Router();

const publicV1Routes = require("./public.v1.routes");
const publicV2Routes = require("./public.v2.routes");

const userRoutes = require("./user.routes");
const miscRoutes = require("./misc.routes");
const connectorRoutes = require("./connector.routes");
const billerRoutes = require("./biller.routes");
const roleRoutes = require("./role.routes");

router.use("/v1", publicV1Routes);
router.use("/v2", publicV2Routes);
router.use(userRoutes);
router.use(miscRoutes);
router.use(connectorRoutes);
router.use(billerRoutes);
router.use(roleRoutes);

module.exports = router;
