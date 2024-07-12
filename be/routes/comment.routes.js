import { Router } from "express";
import {
  addComment,
  deleteCommentById,
} from "../controllers/comment.controllers.js";

const commentRouter = Router();

commentRouter.post("/", addComment);
commentRouter.delete("/:commentId", deleteCommentById);

export default commentRouter;
