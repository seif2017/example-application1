const { logs } = require("./logService");
var util = require('util');

function logRequestMiddleware(req, res, next) {
  logs("[RCV]", req.method , req.url, ", Body:", req.body); 
  next();
}

module.exports = logRequestMiddleware;
