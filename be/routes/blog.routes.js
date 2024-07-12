import { Router } from "express";
import multer from "multer";
import { storage } from "../config/storage.js";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  deleteBlogById,
} from "../controllers/blog.controllers.js";
import { verifyAccessToken } from "../middlewares/auth.middleware.js";

const blogRouter = Router();
const blogImage = multer({ storage });

blogRouter.post(
  "/",
  blogImage.single("blog-image"),
  verifyAccessToken,
  createBlog
);
blogRouter.get("/", getAllBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.delete("/:blogId/:imageFilename", deleteBlogById);

export default blogRouter;
