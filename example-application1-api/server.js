const express = require("express");
const path = require("path");
const randomId = require("random-id");
const app = express(),
  bodyParser = require("body-parser");
port = 3080;

require("dotenv").config();

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../example-application1-vue/dist")));

// enable CORS without external module
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/api/users", (req, res) => {
  console.log("api/users called!!!7777!!!!");
  res.json(users);
});

app.post("/api/user", (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  // user.email = "a@a.com";
  console.log("Adding user hhhhh", user);

  users.push(user);
  res.json("user addedd");
});

app.get("/api/getDate", (req, res) => {
  // res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
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
  console.log(process.env.XXX);
});

app.get("/api/getEnv", (req, res) => {
  res.json(process.env.XXX);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../example-application1-vue/build/index.html"));
  console.log("landing page");
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
