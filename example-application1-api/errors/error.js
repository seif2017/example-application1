const errorCodes = require("./errorCodes");

class error extends Error {
  constructor(code, details) {
    var err = errorCodes[code];
    if (!err) {
      code = 99;
      err = errorCodes[code];
    }
    const msg = err.message.replace("%1", details);
    super(msg);
    Object.setPrototypeOf(this, new.target.prototype);
    this.statusCode = err.status;
    this.code = code.toString();
    if (this.code.length == 1) this.code = "0" + this.code;
    Error.captureStackTrace(this);
  }
}

module.exports = error;
