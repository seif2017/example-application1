const { logs } = require("./logService");
var util = require("util");

const resDotSendInterceptor = (res, send) => (content) => {
  res.contentBody = content;
  res.send = send;
  res.send(content);
};

function logRequestMiddleware(req, res, next) {
  logs("[RECV]", req.method, req.url, ", Body:", req.body);

  res.send = resDotSendInterceptor(res, res.send);

  res.on("finish", () => {
    logs("[SEND]", "Status:", res.statusCode, ", Content:", res.contentBody);
  });

  next();
}

module.exports = logRequestMiddleware;
