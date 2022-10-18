const express = require("express");
const router = express.Router();

const api_controller = require("../controllers/api_controller");

router.get("/users", api_controller.getUsers);
router.delete("/users/:id", api_controller.deleteUser);
router.post("/users", api_controller.addUser);

router.get("/getDate", api_controller.getDate);
router.get("/getEnv", api_controller.getEnv);

module.exports = router;
