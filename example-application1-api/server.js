const express = require("express");
const path = require("path");
const app = express(),
  bodyParser = require("body-parser");

port = 3080;

process.env.TZ = "Africa/Tunis";

require("dotenv").config();

app.use(bodyParser.json());
app.use(
  express.static(path.join(__dirname, "../example-application1-vue/dist"))
);

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../example-application1-vue/build/index.html")
  );
  console.log("landing page");
});

const methodOverride = require("method-override");
app.use(methodOverride());

const middlewares = require("./middlewares/middlewares");
app.use(middlewares.logErrors);
app.use(middlewares.clientErrorHandler);
app.use(middlewares.errorHandler);

const api_routes = require("./routes/api_routes.js");
app.use("/api", api_routes);

// enable CORS without external module
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get("*", (req, res, next) => {
  // console.log (req);
  // res.status(404).json({error:{code:404, message: 'Not valid URL '+req.originalUrl}});
  // next( new Error('BROKEN')) // Express will catch this on its own.
  // res
  //   .status(404)
  //   .json({
  //     error: { code: "22", message: "Not valid URL " + req.originalUrl },
  //   });
  next(new Error("NOT VALID URL"));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
