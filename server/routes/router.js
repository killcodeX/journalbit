import express from "express";
import {
  createUser,
  loginUser,
  updateUser,
  getUser,
  getfollowerUser,
  getunfollowerUser,
  getAllUser,
  getdeleteUser,
} from "../controllers/userController.js";
import { newPost } from "../controllers/postController.js";
import {
  getlikePost,
  getunlikePost,
  getcommentPost,
} from "../controllers/putController.js";
import {
  getAllPost,
  getUserPost,
  getOnlySubPost,
} from "../controllers/getController.js";
import { getdeletePost } from "../controllers/deleteController.js";
import { AuthenticateToken } from "../middleware/tokenValidate.js";

const router = express.Router();

// User Routes
router.post("/signup", createUser);
router.post("/signin", loginUser); //AuthenticateToken,
router.put("/update-user", AuthenticateToken, updateUser);
router.get("/get-user/:id", AuthenticateToken, getUser);
router.put("/get-follower/:id", AuthenticateToken, getfollowerUser);
router.put("/get-unfollower/:id", AuthenticateToken, getunfollowerUser);
router.get("/get-all-user", AuthenticateToken, getAllUser);
router.delete("/delete-user/:id", AuthenticateToken, getdeleteUser);

// Post Routes
router.post("/new-post", AuthenticateToken, newPost);
router.get("/allpost", AuthenticateToken, getAllPost);
router.get("/onlysubpost", AuthenticateToken, getOnlySubPost);
router.get("/mypost/:id", AuthenticateToken, getUserPost); // AuthenticateToken
router.put("/likepost", AuthenticateToken, getlikePost); // AuthenticateToken
router.put("/unlikepost", AuthenticateToken, getunlikePost);
router.put("/addcomment", AuthenticateToken, getcommentPost);
router.delete("/deletepost/:id", AuthenticateToken, getdeletePost);

export default router;
