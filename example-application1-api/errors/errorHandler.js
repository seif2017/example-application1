const { logs } = require("../logging/logService");

function logError(err) {
  logs(
    "[ERROR]",
    "Status:",
    err.statusCode,
    ", Code:",
    err.code,
    ", Message:",
    err.message
  );
}

function logErrorMiddleware(err, req, res, next) {
  logError(err);
  next(err);
}

function returnErrorMiddleware(err, req, res, next) {
  const jsonError = { error: { code: err.code, message: err.message } };
  res.status(err.statusCode).json(jsonError);
}

module.exports = {
  logError,
  logErrorMiddleware,
  returnErrorMiddleware,
};
