const express = require("express");
const router = express.Router();

const rolesControllers = require("../controllers/role.controllers");

router.get("/roles/check", rolesControllers.checkPermission);
router.get("/roles", rolesControllers.getRoles);
router.get("/permissions", rolesControllers.getPermissions);

module.exports = router;
