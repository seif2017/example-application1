const errorCodes = require("./errorCodes");

class error extends Error {
  // constructor(code, details) {
  constructor(err, details) {
    const msg = err.message.replace("%1", details);
    super(msg);
    Object.setPrototypeOf(this, new.target.prototype);
    this.statusCode = err.status;
    this.code = err.code
    Error.captureStackTrace(this);
  }
}

module.exports = error;
