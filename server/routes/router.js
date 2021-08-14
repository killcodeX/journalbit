import express from "express";
import { createUser } from "../controllers/userController.js";

const router = express.Router();

// User Routes

router.post('/create-user',createUser)

export default router;