const errorCodes = {
  01: { status: 401, message: "Bearer token required" },
  02: { status: 401, message: "Expired bearer token" },
  03: { status: 401, message: "Invalid bearer token" },
  04: { status: 401, message: "Unknown FSP" },
  05: { status: 410, message: "Old version no longer available" },
  06: { status: 400, message: "Biller required" },
  07: { status: 400, message: "Unknown biller" },
  08: { status: 503, message: "Biller system unreachable" },
  09: { status: 400, message: "Invalid search parameters" },
  10: { status: 404, message: "No invoices found" },
  11: { status: 400, message: "Invalid invoice id" },
  12: { status: 404, message: "Invoice id not found" },
  13: { status: 400, message: "Invalid request body (%1)" },
  14: { status: 400, message: "Invalid transactionCode" },
  15: { status: 400, message: "Invalid transactionStatus" },
  16: { status: 400, message: "Invalid rejectionReason" },
  17: { status: 400, message: "Invalid paymentMode" },
  18: { status: 400, message: "Invalid paymentCanal" },
  19: { status: 400, message: "Invalid paymentMean" },
  20: { status: 400, message: "Invalid transactionReference" },
  21: { status: 400, message: "Invalid paymentAmount" },
  22: { status: 400, message: "Invalid paymentDate" },
  23: { status: 400, message: "Invalid sourceAccount" },
  24: { status: 400, message: "Invalid destinationAccount" },
  25: { status: 409, message: "Invoice already paid" },
  26: { status: 503, message: "Biller system error" },
  27: { status: 400, message: "Invalid billerAuthIds" },
  28: { status: 401, message: "Unauthorized" },
  29: { status: 404, message: "FspSol not found" },
  30: { status: 400, message: "Invalid paymentReceipt" },

  53: { status: 404, message: "Invalid URL (%1)" },

  99: { status: 500, message: "Internal error: %1" },
};

module.exports = errorCodes;
