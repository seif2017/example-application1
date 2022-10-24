const express = require("express");
const router = express.Router();

const rolesControllers = require("../controllers/role.controllers");

router.get("/roles/check", rolesControllers.checkPermission);

module.exports = router;
