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

const errorHandlerMiddleware = require("./errors/error-handler.middleware");
const requestNumberingMiddleware = require("./logging/request-numbering.middleware");
const requestLoggingMiddleware = require("./logging/request-logging.middleware");
const responseLoggingMiddleware = require("./logging/response-logging.middleware");
const CustomError = require("./errors/custom-error.model");
const { INVALID_URL } = require("./errors/error-codes");
const logs = require("./logging/log-service");


app.get("/", (req, res) => {
  logs("[INFO]", "landing page");
  res.sendFile(
    path.join(__dirname, "../example-application1-vue/build/index.html")
  );
});

// use numbering requests
app.use(requestNumberingMiddleware);

// use logging requests
app.use(requestLoggingMiddleware);

// use logging responses
app.use(responseLoggingMiddleware);

const routes = require("./routes");
app.use("/api", routes);

app.use("*", (req, res, next) => {
  next(new CustomError(INVALID_URL, req.originalUrl));
});

// add custom error handler as the last middleware
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  logs("[INFO]", `Server listening on port ${port}`);
});
