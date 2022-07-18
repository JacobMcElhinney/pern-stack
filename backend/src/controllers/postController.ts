import type { Request, Response } from "express";
import { Post } from "../interfaces/post";
import db from "../models/index";

//Get all posts from database
export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts: Array<Post> = await db.Post.findAll();
    res.status(200).json(posts);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

//Get post by id
export const getPostById = async (req: Request, res: Response) => {
  try {
    const post: Post = await db.Post.findByPk(req.params.id);
    res.status(200).json(post);
  } catch (err: any) {
    res.status(500).json({ message: err.message});
  }
};

//Create post
export const createPost = async (req: Request, res: Response) => {
  try {
    const post = await db.Post.create(req.body);
    res.status(201).json(post);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
    console.log("error")
  }
};

//Update post by id
export const updatePost = async (req: Request, res: Response) => {
  try {
    const post = await db.Post.findByPk(req.params.id);
    if (post) {
      await post.update(req.body);
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

//Delete post by id
export const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await db.Post.findByPk(req.params.id);
    if (post) {
      //delete all comments associated with post
      await db.Comment.destroy({
        where: {
          postId: req.params.id,
        },
      });
      await post.destroy();
      res.status(200).json({ message: "Post deleted" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
