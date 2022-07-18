import type { Request, Response } from "express";
import db from "../models/index";
import { Comment } from "../interfaces/comment";

//Get all comments
export const getAllComments = async (req: Request, res: Response) => {
  try {
    const comments: Array<Comment> = await db.Comment.findAll();
    res.status(200).json(comments);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

//Get comment by id
export const getCommentById = async (req: Request, res: Response) => {
  try {
    const comment: Comment = await db.Comment.findByPk(req.params.id);
    res.status(200).json(comment);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

//Get all comments where postId = id
export const getCommentsByPostId = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const comments: Array<Comment> = await db.Comment.findAll({
      where: {
        postId: id,
      },
    });
    res.json(comments);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

//Create comment
export const createComment = async (req: Request, res: Response) => {
  try {
      const comment: Comment = await db.Comment.create(req.body);
      res.status(201).json(comment);
    }
   catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

//Update comment by id
export const updateComment = async (req: Request, res: Response) => {
  try {
    const comment = await db.Comment.findByPk(req.params.id);
    if (comment) {
      await comment.update(req.body);
      res.json(comment);
    } else {
      res.status(404).json({ message: "Comment not found" });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

//delete comment by id
export const deleteComment = async (req: Request, res: Response) => {
  try {
    const comment = await db.Comment.findByPk(req.params.id);
    if (comment) {
      await comment.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Comment not found" });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
