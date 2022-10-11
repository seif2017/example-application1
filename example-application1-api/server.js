const express = require("express");
const path = require("path");
const app = express(),
  bodyParser = require("body-parser");

port = 3080;

process.env.TZ = "Africa/Tunis";

require("dotenv").config();

const { logs } = require("./logging/logService");

const {
  logErrorMiddleware,
  returnErrorMiddleware,
} = require("./errors/errorHandler");
const error = require("./errors/error");

app.use(bodyParser.json());
app.use(
  express.static(path.join(__dirname, "../example-application1-vue/dist"))
);

const logRequestMiddleware = require("./logging/logRequests");
app.use(logRequestMiddleware);

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../example-application1-vue/build/index.html")
  );
  logs("[INFO]", "landing page");
});

const api_routes = require("./routes/api_routes.js");
app.use("/api", api_routes);

// enable CORS without external module
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get("*", (req, res, next) => {
  next(new error("03", req.originalUrl));
  // next(new error("44", "tttttt"));
});

app.use(logErrorMiddleware);
app.use(returnErrorMiddleware);

app.listen(port, () => {
  logs("[INFO]", `Server listening on port ${port}`);
});
