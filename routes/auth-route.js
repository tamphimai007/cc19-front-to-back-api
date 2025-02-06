const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
// middlewares
const { authCheck } = require("../middlewares/auth-middleware");
const {
  validateWithZod,
  registerSchema,
  loginSchema,
} = require("../middlewares/validators");

// @ENDPOINT http://localhost:8000/api/register
router.post(
  "/register",
  validateWithZod(registerSchema),
  authControllers.register
);
router.post("/login", validateWithZod(loginSchema), authControllers.login);
router.get("/current-user", authCheck, authControllers.currentUser);
// export
module.exports = router;
