const logs = require("./log-service");

function requestLoggingMiddleware(req, res, next) {
    logs("#"+req.num_req,"[RECV]", req.ip, req.protocol, req.httpVersion, req.method, req.originalUrl, "Body:", req.body);
    next();
  }

module.exports = requestLoggingMiddleware;
