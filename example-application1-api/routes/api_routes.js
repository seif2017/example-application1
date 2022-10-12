const express = require("express");
const router = express.Router();

const api_controller = require("../controllers/api_controller");

router.get("/users", async (req, res) => {
  const users = await api_controller.getUsers(req, res);
  res.json(users);
});

router.post("/users", (req, res) => {
  const user=api_controller.addUser(req, res);
  res.json(user);
});

router.get("/getDate", (req, res) => {
  const dat = api_controller.getDate(req, res);
  res.json(dat);
});

router.get("/getEnv", (req, res) => {
  const env = api_controller.getEnv(req, res);
  res.json(env);
});

module.exports = router;
