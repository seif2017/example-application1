const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/user.controllers");

router.get("/users", userControllers.getUsers);
router.delete("/users/:id", userControllers.deleteUser);
router.put("/users/:id", userControllers.updateUser);
router.post("/users", userControllers.addUser);

module.exports = router;
