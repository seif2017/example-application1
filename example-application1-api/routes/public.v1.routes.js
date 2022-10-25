const express = require("express");
const CustomError = require("../errors/custom-error.model");
const { OLD_VERSION } = require("../errors/error-codes");
const router = express.Router();

function oldVersion(){
    throw new CustomError(OLD_VERSION)
}

router.use(oldVersion);

module.exports = router;
