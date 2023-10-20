import express from "express";
import { createPost,getPost,deletePost,likeUnlikePost,replyPost,getFeedPosts,getUserPosts } from "../controllers/postController.js";

import { protectRoute } from "../middlewares/protectRoute.js";
const router = express.Router();

router.get("/feed",protectRoute, getFeedPosts);
router.post("/create",protectRoute, createPost);
router.get("/:id", getPost);
router.get("/user/:username", getUserPosts);

router.delete("/:id",protectRoute, deletePost);
router.post("/like/:id",protectRoute, likeUnlikePost);
router.post("/reply/:id",protectRoute, replyPost);


//login
//update profile   

export default router;