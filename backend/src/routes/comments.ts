import express from "express";
import {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} from "../controllers/commentController";

const commentsRouter = express.Router();

commentsRouter.get("/", getAllComments);
commentsRouter.get("/:id", getCommentById);
commentsRouter.post("/", createComment);
commentsRouter.put("/:id", updateComment);
commentsRouter.delete("/:id", deleteComment);

export default commentsRouter;
