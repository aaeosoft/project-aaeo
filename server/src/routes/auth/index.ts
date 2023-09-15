import express from "express";

import authController from "../../controllers/auth.controller";

const router = express.Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/send-reset-password", authController.sendResetPassword);

export default router;