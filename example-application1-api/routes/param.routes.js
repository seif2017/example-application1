const express = require("express");
const router = express.Router();

const paramControllers = require("../controllers/param.controllers");

router.get("/params", paramControllers.getParams);
router.get("/params/:id", paramControllers.getParam);
router.put("/params/:id/:value", paramControllers.setParam);

module.exports = router;
