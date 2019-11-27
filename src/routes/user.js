const express = require("express");
const router = express.Router();

module.exports = userController => {
  router.get("/login", userController.login);
  router.post("/register", userController.register);
  return router;
};
