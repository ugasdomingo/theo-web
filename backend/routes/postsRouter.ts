//Import tools
import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth";
import {
	createPost,
	deletePost,
	getAllPost,
	getPost,
	updatePost,
	getAllPostByCategory,
} from "../controllers/postsController";

//Define router
const postsRouter = Router();

//Routes
postsRouter.get("/", getAllPost);

postsRouter.get("/category/:category", getAllPostByCategory);

postsRouter.post("/", adminAuth, createPost);

postsRouter.get("/:id", getPost);

postsRouter.delete("/:id", adminAuth, deletePost);

postsRouter.put("/:id", adminAuth, updatePost);

//Export routes
export default postsRouter;