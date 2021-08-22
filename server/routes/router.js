import express from "express";
import {
  createUser,
  loginUser,
  updateUser,
  getUser,
} from "../controllers/userController.js";
import { newPost } from "../controllers/postController.js";
import { getlikePost, getunlikePost } from "../controllers/putController.js";
import { getAllPost, getUserPost } from "../controllers/getController.js";
import { AuthenticateToken } from "../middleware/tokenValidate.js";

const router = express.Router();

// User Routes
router.post("/signup", createUser);
router.post("/signin", loginUser); //AuthenticateToken,
router.put("/update-user", AuthenticateToken, updateUser);
router.get("/get-user/:id", AuthenticateToken, getUser);

// Post Routes
router.post("/new-post", AuthenticateToken, newPost);
router.get("/allpost", AuthenticateToken, getAllPost);
router.get("/mypost", AuthenticateToken, getUserPost); // AuthenticateToken
router.put("/likepost", AuthenticateToken, getlikePost); // AuthenticateToken
router.put("/unlikepost", AuthenticateToken, getunlikePost);

export default router;
