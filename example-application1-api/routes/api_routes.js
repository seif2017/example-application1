const express = require("express");
const router = express.Router();
const { logs } = require("../logging/logService");

const api_controller = require("../controllers/api_controller");

router.get("/users", (req, res) => {
  users = api_controller.getUsers(req, res);
  logs("[SND]", users);
  res.json(users);
});

router.post("/users", (req, res) => {
  api_controller.addUser(req, res);
  logs("[SND]", "user addedd");
  res.json("user addedd");
});

router.get("/getDate", (req, res) => {
  const datenc = api_controller.getDate(req, res);
  logs("[SND]", datenc);
  res.json(datenc);
});

router.get("/getEnv", (req, res) => {
  const env = api_controller.getEnv(req, res);
  logs("[INFO]", env);
  logs("[SND]", env);
  res.json(env);
});

module.exports = router;
