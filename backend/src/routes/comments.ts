import express from "express";
import {
  getAllComments,
  getCommentById,
  getCommentsByPostId,
  createComment,
  updateComment,
} from "../controllers/commentController";

const commentsRouter = express.Router();

commentsRouter.get("/", getAllComments);
commentsRouter.get("/:id", getCommentById);
commentsRouter.get("/post/:id", getCommentsByPostId); //get post and all comments associated with it
commentsRouter.post("/", createComment);
commentsRouter.put("/:id", updateComment);

export default commentsRouter;
