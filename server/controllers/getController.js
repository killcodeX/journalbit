import UserMessage from "../models/user.js";
import mongoose from "mongoose";

// POST Controllers

export const getPost = async (req, res) => {
  try {
    res.status(200).json('hello world');
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};