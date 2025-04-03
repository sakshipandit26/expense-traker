const express = require("express");
const { signupValidation, loginValidation } = require("../Middlewares/AuthValidation");
const { signup, login } = require("../Controllers/AuthControllers");
const router = express.Router();

router.post("/signup", signupValidation, signup);
router.post("/login", loginValidation, login);  // ✅ Apply validation middleware here

module.exports = router;
