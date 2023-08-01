import express from "express";
import userList from "../../controllers/user.controller";

const router = express.Router();

router.get("/", userList.testRoute);

export default router;