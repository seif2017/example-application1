const publicV2Services = require("../services/public.v2.services");


exports.getInvoices = async (req, res, next) => {
  // const billerName = req.params.billerName;

  await publicV2Services
    .getInvoices()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

exports.getInvoice = async (req, res, next) => {
  await publicV2Services
    .getInvoice()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

exports.postPaymentNotif = async (req, res, next) => {
  await publicV2Services
    .postPaymentNotif()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

exports.getPayments = async (req, res, next) => {
  // const billerName = req.params.billerName;

  await publicV2Services
    .getPayments()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

exports.getQrCode = async (req, res, next) => {
  // const billerName = req.params.billerName;

  await publicV2Services
    .getQrCode()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};