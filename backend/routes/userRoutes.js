import express from "express";
import { signupUser } from "../controllers/userController.js";
const router = express.Router();
router.post("/signup",signupUser);

//login
//update profile

export default router;