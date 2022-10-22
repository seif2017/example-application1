const logs = require("../logging/log-service");
const CustomError = require("./custom-error.model");
const { INTERNAL_SERVER } = require("./http-status-codes");

function handleErrorMiddleware(err, req, res, next) {
  let customError = err;
  if (!(err instanceof CustomError)) {
    // console.log("#" + req.num_req, "[ORIG ERROR]", err);
    logs("#" + req.num_req, "[ORIGINAL ERROR]", err);

    customError = new CustomError(INTERNAL_SERVER, err.message);
  }

  // we are not using the next function to prvent from triggering
  // the default error-handler. However, make sure you are sending a
  // response to client to prevent memory leaks in case you decide to
  // NOT use, like in this example, the NextFunction .i.e., next(new Error())
  const error = { code: customError.code, message: customError.message };
  if (customError.additionalInfo) error.additionalInfo = customError.additionalInfo;
  // console.log("#" + req.num_req, "[ERROR]", error);
  logs("#" + req.num_req, "[ERROR]", error);

  res.status(customError.status).send({ error });
}

module.exports = handleErrorMiddleware;
