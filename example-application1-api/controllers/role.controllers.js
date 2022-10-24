const roleServices = require("../services/role.services");

exports.checkPermission = async (req, res, next) => {
  const permission = req.query.permission
  const role = req.query.role
  await roleServices
    .checkPermission(permission, role)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

exports.getRoles = async (req, res, next) => {
  await roleServices
    .getRoles()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

exports.getPermissions = async (req, res, next) => {
  await roleServices
    .getPermissions()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};