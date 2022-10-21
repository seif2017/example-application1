const express = require("express");
const router = express.Router();

const connectorsControllers = require("../controllers/connectors.controllers");

router.get("/callConnector/:connector_name", connectorsControllers.callConnector);

module.exports = router;
