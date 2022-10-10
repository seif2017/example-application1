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
  // console.log (req);
  // res.status(404).json({error:{code:404, message: 'Not valid URL '+req.originalUrl}});
  // next( new Error('BROKEN')) // Express will catch this on its own.
  // res
  //   .status(404)
  //   .json({
  //     error: { code: "22", message: "Not valid URL " + req.originalUrl },
  //   });
  // next(new Error("NOT VALID URL"));
  // res.status(err.statusCode || 500).send(err.message);
  const jsonError = {error:{code:err.code,message:err.message}};
  console.log("SND:", jsonError)
  res.status(err.statusCode).json(jsonError);
}

module.exports = {
  logError,
  logErrorMiddleware,
  returnErrorMiddleware,
};
