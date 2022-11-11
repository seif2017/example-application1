const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/auth.controllers");

router.get("/auth/login", authControllers.login);

module.exports = router;
