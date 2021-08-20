import express from "express";
import { createUser, loginUser, updateUser } from "../controllers/userController.js";
import { getPost } from "../controllers/getController.js";
import { AuthenticateToken } from "../middleware/tokenValidate.js";

const router = express.Router();

// User Routes
router.post("/signup", createUser);
router.post("/signin", loginUser); //AuthenticateToken,
router.put("/update-user", AuthenticateToken,updateUser);

// Post Routes
router.get("/get-post", getPost);

export default router;
