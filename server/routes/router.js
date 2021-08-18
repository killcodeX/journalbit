import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";
import { getPost } from "../controllers/getController.js";
import { AuthenticateToken } from "../middleware/tokenValidate.js";

const router = express.Router();

// User Routes
router.post("/signup", AuthenticateToken, createUser);
router.post("/signin", AuthenticateToken, loginUser); //AuthenticateToken,

// Post Routes
router.get("/get-post", getPost);

export default router;
