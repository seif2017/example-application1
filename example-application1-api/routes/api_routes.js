const express = require("express");
const router = express.Router();

const api_controller = require("../controllers/api_controller");

router.get("/users", (req, res) => {
  console.log("api/users called!!!7777!!!!");
  users = api_controller.getUsers(req, res);
  res.json(users);
});

router.post("/users", (req, res) => {
  api_controller.addUser(req, res);
  res.json("user addedd");
});

router.get("/getDate", (req, res) => {
  const datenc = api_controller.getDate(req, res);
  res.json(datenc);
  console.log("get ddddddddddddate");
});

router.get("/getEnv", (req, res) => {
  const env = api_controller.getEnv(req, res);
  console.log(env);
  res.json(env);
});

router.get("*", (req, res, next) => {
  console.log("********");
  // errorHandler(new Error("RRRRR"),req,res,next)
  next(new Error("NOT VALID URL"));
});

module.exports = router;
