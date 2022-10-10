const errorCodes = require('./errorCodes')

class error extends Error {
  constructor(code, description) {
    const err = errorCodes[code] || { code: "??", status: 500, message: description || "Unknown error" };
    const msg = err.message.replace('%1', description)
    super(msg);
    Object.setPrototypeOf(this, new.target.prototype);
    this.statusCode = err.status;
    this.code = code;
    Error.captureStackTrace(this);
  }
}

module.exports = error;
