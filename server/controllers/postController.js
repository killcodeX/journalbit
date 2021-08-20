import PostMessage from "../models/post.js";
import mongoose from "mongoose";
import { getMetData } from "../helpers/metscrapper.js";

// POST Controllers

export const newPost = async (req, res) => {
  const post = req.body;
  const data = await getMetData(post.url);
  console.log(data);
  console.log(req.userId)
  try {
    const result = await PostMessage.create({
      ...data,
      topic:post.topic,
      postedBy:req.userId
    });
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
