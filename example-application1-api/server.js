const express = require("express");
const path = require("path");
const app = express(),
  bodyParser = require("body-parser");

port = 3080;

process.env.TZ = "Africa/Tunis";
// process.env.TZ = "GMT-1"; // !!!!

require("dotenv").config();



app.use(bodyParser.json());
app.use(
  express.static(path.join(__dirname, "../example-application1-vue/dist"))
);

// enable CORS without external module
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const { logs } = require("./logging/logService");
const error = require("./errors/error");
const {
  logErrorMiddleware,
  returnErrorMiddleware,
} = require("./errors/errorHandler");
const logRequestMiddleware = require("./logging/logRequests");
app.use(logRequestMiddleware);
app.use(logErrorMiddleware);
app.use(returnErrorMiddleware);

app.get("/", (req, res) => {
  logs("[INFO]", "landing page");
  res.sendFile(
    path.join(__dirname, "../example-application1-vue/build/index.html")
  );
});

// const api_routes = require("./routes/api_routes.js");
const routes = require("./routes");
app.use("/api", routes);

const { INVALID_URL } = require("./errors/errorCodes");
app.use("*", (req, res, next) => {
  next(new error(INVALID_URL, req.originalUrl));
});

app.listen(port, () => {
  logs("[INFO]", `Server listening on port ${port}`);
});
