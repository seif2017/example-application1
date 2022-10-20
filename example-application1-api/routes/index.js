const express = require("express");
const router = express.Router();


const userRoutes = require("./user.routes");
const miscRoutes = require("./misc.routes");

router.use (userRoutes)
router.use (miscRoutes)

module.exports = router;


