
const express = require("express");
const router = express.Router();

const services = require("../services/services");

// const api_controller = require("../controllers/api_controller");


// router.get("/", api_controller.index);

router.get("/aaa", (req, res, next) => {
    console.log("********");
    // errorHandler(new Error("RRRRR"),req,res,next)
    next(new Error("NOT VALID AAA"));
  });


  
  router.get("/users", (req, res) => {
    console.log("api/users called!!!7777!!!!");
    users = services.getUsers();
    res.json(users);
  });
  
  router.post("/users", (req, res) => {
    const user = req.body.user;
    services.addUser(user);
    res.json("user addedd");
  });
  
  router.get("/getDate", (req, res) => {
    // console.log(process.env.TZ)
    // process.env.TZ = 'Africa/Tunis';
    // console.log(process.env.TZ)
  
    const dt = new Date(); // ==> donne UTC   si TZ est vide
    console.log(dt);
    const datenc =
      dt.toLocaleDateString("fr", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }) +
      " " +
      dt.toLocaleTimeString("fr", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
  
    console.log(datenc);
    res.json(datenc);
    console.log("get ddddddddddddate");
  });
  
  router.get("/getEnv", (req, res) => {
    console.log(process.env.XXX);
    res.json(process.env.XXX);
  });

  module.exports = router;
