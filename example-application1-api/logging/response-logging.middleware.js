const logs = require("./log-service");

function responseLoggingMiddleware(req, res, next) {
  let send = res.send;
  res.send = (data) => {
    logs(
      "#" + req.num_req,
      "[SEND]",
      `Status: ${res.statusCode}`,
      "Body:",
      data
    );
    res.send = send;
    return res.send(data);
  };
  next();
}

module.exports = responseLoggingMiddleware;
