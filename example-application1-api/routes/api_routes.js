const express = require("express");
const router = express.Router();

const api_controller = require("../controllers/api_controller");

router.get("/users", async (req, res) => {
  api_controller.getUsers(req, res);
});

router.post("/users", (req, res, next) => {
  api_controller.addUser(req, res, next);
});

router.get("/getDate", (req, res) => {
  api_controller.getDate(req, res);
});

router.get("/getEnv", (req, res) => {
  api_controller.getEnv(req, res);
});

module.exports = router;
