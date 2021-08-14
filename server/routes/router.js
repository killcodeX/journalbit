import express from "express";
import { createUser } from "../controllers/userController.js";
import { getPost } from "../controllers/getController.js"

const router = express.Router();

// User Routes
router.post('/signup',createUser)


// Post Routes
router.get('/get-post', getPost)

export default router;