const express = require("express");
const router = express.Router();

const connectorsControllers = require("../controllers/connectors.controllers");

router.get("/callApi", connectorsControllers.callApi);

module.exports = router;
