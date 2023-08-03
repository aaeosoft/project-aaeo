import express from "express";
import userList from "../../controllers/user.controller";
import authenticate from "../../middlewares/authenticate";

const router = express.Router();

router.get("/", authenticate, userList.testRoute);

export default router;