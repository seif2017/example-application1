const express = require("express");
const router = express.Router();

const billersControllers = require("../controllers/biller.controllers");

router.get("/callBiller/:billerName", billersControllers.callBiller);
router.get("/billers", billersControllers.getBillers);
router.get("/billers/:billerName", billersControllers.getBiller);

module.exports = router;
