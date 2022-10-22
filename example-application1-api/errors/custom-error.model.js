const { INTERNAL_SERVER } = require("./http-status-codes");

class CustomError {
  
    constructor(error , additionalInfo ) {
      this.code = error.code || '99';
      this.status = error.status || INTERNAL_SERVER;
      this.message = error.message || "Internal error";
      this.additionalInfo = additionalInfo || ""
    }
  }

  module.exports = CustomError;
