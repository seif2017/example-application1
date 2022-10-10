class error extends Error {
  constructor(code, statusCode, description) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.statusCode = statusCode;
    this.code = code;
    Error.captureStackTrace(this);
  }
}

module.exports = error;
