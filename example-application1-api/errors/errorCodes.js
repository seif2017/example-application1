const {
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER,
} = require("./httpStatusCodes");

const errorCodes = {
  01: { status: 401, message: "Bearer token required" },
  02: { status: 401, message: "Expired bearer token" },
  03: { status: 401, message: "Invalid bearer token" },
  04: { status: 401, message: "Unknown FSP" },
  05: { status: 410, message: "Old version no longer available" },
  06: { status: BAD_REQUEST, message: "Biller required" },
  07: { status: BAD_REQUEST, message: "Unknown biller" },
  08: { status: 503, message: "Biller system unreachable" },
  09: { status: BAD_REQUEST, message: "Invalid search parameters" },
  10: { status: NOT_FOUND, message: "No invoices found" },
  11: { status: BAD_REQUEST, message: "Invalid invoice id" },
  12: { status: NOT_FOUND, message: "Invoice id not found" },
  13: { status: BAD_REQUEST, message: "Invalid request body (%1)" },

  INVALID_REQUEST_BODY: {
    code: "13",
    status: BAD_REQUEST,
    message: "Invalid request body (%1)",
  },

  14: { status: BAD_REQUEST, message: "Invalid transactionCode" },
  15: { status: BAD_REQUEST, message: "Invalid transactionStatus" },
  16: { status: BAD_REQUEST, message: "Invalid rejectionReason" },
  17: { status: BAD_REQUEST, message: "Invalid paymentMode" },
  18: { status: BAD_REQUEST, message: "Invalid paymentCanal" },
  19: { status: BAD_REQUEST, message: "Invalid paymentMean" },
  20: { status: BAD_REQUEST, message: "Invalid transactionReference" },
  21: { status: BAD_REQUEST, message: "Invalid paymentAmount" },
  22: { status: BAD_REQUEST, message: "Invalid paymentDate" },
  23: { status: BAD_REQUEST, message: "Invalid sourceAccount" },
  24: { status: BAD_REQUEST, message: "Invalid destinationAccount" },
  25: { status: 409, message: "Invoice already paid" },
  26: { status: 503, message: "Biller system error" },
  27: { status: BAD_REQUEST, message: "Invalid billerAuthIds" },
  28: { status: 401, message: "Unauthorized" },
  29: { status: NOT_FOUND, message: "FspSol not found" },
  30: { status: BAD_REQUEST, message: "Invalid paymentReceipt" },

  USER_NOT_FOUND: {
    code: "50",
    status: NOT_FOUND,
    message: "User %1 not found",
  },
  USER_ALREADY_EXISTS: {
    code: "51",
    status: BAD_REQUEST,
    message: "User %1 already exists",
  },
  DATABASE_ERROR: {
    code: "52",
    status: BAD_REQUEST,
    message: "Database error (%1)",
  },
  INVALID_URL: { code: "53", status: NOT_FOUND, message: "Invalid URL (%1)" },
  CONNECTOR_ERROR: { code: "54", status: 503, message: "Connector error (%1)" },

  INTERNAL_SERVER: {
    code: "99",
    status: INTERNAL_SERVER,
    message: "Internal error: %1",
  },
};

module.exports = errorCodes;
