const express = require("express");
const CustomError = require("../errors/custom-error.model");
const { OLD_VERSION } = require("../errors/error-codes");
const router = express.Router();

const publiV2Controllers = require("../controllers/public.v2.controllers");

router.get("/invoices", publiV2Controllers.getInvoices);
router.get("/invoices/:id", publiV2Controllers.getInvoice);
router.post("/invoices/:id", publiV2Controllers.postPaymentNotif);
router.get("/payments", publiV2Controllers.getPayments);
router.get("/qrcode", publiV2Controllers.getQrCode);

module.exports = router;
