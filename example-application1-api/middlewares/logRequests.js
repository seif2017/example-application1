function logRequestMiddleware(req, res, next) {
  console.log("RCV:", "77777");
  next();
}

module.exports = logRequestMiddleware;
