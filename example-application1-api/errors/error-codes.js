const {
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER,
  UNATHORIZED,
  UNAVAILABLE,
  GONE,
  CONFLICT,
} = require("./http-status-codes");

const errorCodes = {
  TOKEN_REQUIRED: {
    code: "01",
    status: UNATHORIZED,
    message: "Bearer token required",
  },
  EXPIRED_TOKEN: {
    code: "02",
    status: UNATHORIZED,
    message: "Expired bearer token",
  },
  INVALID_TOKEN: {
    code: "03",
    status: UNATHORIZED,
    message: "Invalid bearer token",
  },
  UNKNOWN_FSP: { code: "04", status: UNATHORIZED, message: "Unknown FSP" },
  OLD_VERSION: {
    code: "05",
    status: GONE,
    message: "Old version no longer available",
  },
  BILLER_REQUIRED: {
    code: "06",
    status: BAD_REQUEST,
    message: "Biller required",
  },
  UNKNOWN_BILLER: {
    code: "07",
    status: BAD_REQUEST,
    message: "Unknown biller",
  },
  BILLER_SYSTEM_UNREACHABLE: {
    code: "08",
    status: UNAVAILABLE,
    message: "Biller system unreachable",
  },
  INVALID_PARAMETERS: {
    code: "09",
    status: BAD_REQUEST,
    message: "Invalid search parameters",
  },
  NO_INVOICES_FOUND: {
    code: "10",
    status: NOT_FOUND,
    message: "No invoices found",
  },
  INVALID_INVOICE_ID: {
    code: "11",
    status: BAD_REQUEST,
    message: "Invalid invoice id",
  },
  INVOICE_ID_NOT_FOUND: {
    code: "12",
    status: NOT_FOUND,
    message: "Invoice id not found",
  },
  INVALID_REQUEST_BODY: {
    code: "13",
    status: BAD_REQUEST,
    message: "Invalid request body (%1)",
  },
  INVALID_TRANSACTION_CODE: {
    code: "14",
    status: BAD_REQUEST,
    message: "Invalid transactionCode",
  },
  INVALID_TRANSACTION_STATUS: {
    code: "15",
    status: BAD_REQUEST,
    message: "Invalid transactionStatus",
  },
  INVALID_REJECTION_REASON: {
    code: "16",
    status: BAD_REQUEST,
    message: "Invalid rejectionReason",
  },
  INVALID_PAYMENT_MODE: {
    code: "17",
    status: BAD_REQUEST,
    message: "Invalid paymentMode",
  },
  INVALID_PAYMENT_CANAL: {
    code: "18",
    status: BAD_REQUEST,
    message: "Invalid paymentCanal",
  },
  INVALID_PAYMENT_MEAN: {
    code: "19",
    status: BAD_REQUEST,
    message: "Invalid paymentMean",
  },
  INVALID_TRANSACTION_REFERENCE: {
    code: "20",
    status: BAD_REQUEST,
    message: "Invalid transactionReference",
  },
  INVALID_PAYMENT_AMOUNT: {
    code: "21",
    status: BAD_REQUEST,
    message: "Invalid paymentAmount",
  },
  INVALID_PAYMENT_DATE: {
    code: "22",
    status: BAD_REQUEST,
    message: "Invalid paymentDate",
  },
  INVALID_SOURCE_ACCOUNT: {
    code: "23",
    status: BAD_REQUEST,
    message: "Invalid sourceAccount",
  },
  INVALID_DESTINATION_ACCOUNT: {
    code: "24",
    status: BAD_REQUEST,
    message: "Invalid destinationAccount",
  },
  INVOICE_ALREADY_PAID: {
    code: "25",
    status: CONFLICT,
    message: "Invoice already paid",
  },
  BILLER_SYSTEM_ERROR: {
    code: "26",
    status: UNAVAILABLE,
    message: "Biller system error",
  },
  INVALID_BILLER_AUTH_IDS: {
    code: "27",
    status: BAD_REQUEST,
    message: "Invalid billerAuthIds",
  },
  UNAUTHORIZED: { code: "28", status: UNATHORIZED, message: "Unauthorized" },
  FSP_SOL_NOT_FOUND: {
    code: "29",
    status: NOT_FOUND,
    message: "FspSol not found",
  },
  INVALID_PAYMENTRECEIPT: {
    code: "30",
    status: BAD_REQUEST,
    message: "Invalid paymentReceipt",
  },

  USER_NOT_FOUND: {
    code: "50",
    status: NOT_FOUND,
    message: "User not found",
  },
  USER_ALREADY_EXISTS: {
    code: "51",
    status: BAD_REQUEST,
    message: "User already exists",
  },
  DATABASE_ERROR: {
    code: "52",
    status: BAD_REQUEST,
    message: "Database error",
  },
  INVALID_URL: { code: "53", status: NOT_FOUND, message: "Invalid URL (%1)" },
  CONNECTOR_ERROR: {
    code: "54",
    status: UNAVAILABLE,
    message: "Connector error",
  },

  INTERNAL_SERVER: {
    code: "99",
    status: INTERNAL_SERVER,
    message: "Internal server error",
  },
};

module.exports = errorCodes;
