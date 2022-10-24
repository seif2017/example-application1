const logs = require("../logging/log-service");
const CustomError = require("../errors/custom-error.model");
const { NOT_FOUND } = require("../errors/http-status-codes");
const roles = require("../roles/roles");
const permissions = require("../roles/permissions");

exports.checkPermission = async (permission, role) => {
 
  // is role correct ?
  roleObject = eval("roles." + role);
  if (!roleObject) throw new CustomError(NOT_FOUND, "Invalid role");

  // permission in role ?
  if (!roleObject.includes(permission))
    throw new CustomError(NOT_FOUND, "Permission denied");

  return "ok";
};
