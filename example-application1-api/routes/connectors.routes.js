const express = require("express");
const router = express.Router();

const connectorsControllers = require("../controllers/connectors.controllers");

router.get("/callConnector/:connectorName", connectorsControllers.callConnector);
router.get("/connectors", connectorsControllers.getConnectors);
router.get("/connectors/:connectorName", connectorsControllers.getConnector);

module.exports = router;
