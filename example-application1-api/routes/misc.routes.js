const express = require("express");
const router = express.Router();

const miscControllers = require("../controllers/misc.controllers");


router.get("/getDate", miscControllers.getDate);
router.get("/getEnv", miscControllers.getEnv);

module.exports = router;
