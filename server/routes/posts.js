import express from "express";

import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

// localhost:5001/posts - bc added prefix of posts to all routes

router.get("/", getPosts);
router.post("/", createPost);

export default router;
