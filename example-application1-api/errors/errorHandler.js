function logError(err) {
  console.error(
    "====> ERROR ====>",
    "Code:",
    err.code,
    ", Status:",
    err.statusCode,
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
  console.log("SND:", jsonError);
  res.status(err.statusCode).json(jsonError);
}

module.exports = {
  logError,
  logErrorMiddleware,
  returnErrorMiddleware,
};
