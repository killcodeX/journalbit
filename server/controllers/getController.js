import PostMessage from "../models/post.js";
import mongoose from "mongoose";
import { getMetData } from '../helpers/metscrapper.js';

// POST Controllers

export const getPost = async (req, res) => {
  const post = req.body;
  getMetData(post.url)
  try {
    res.status(200).json('hello world');
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};