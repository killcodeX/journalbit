import UserMessage from "../models/user.js";
import mongoose from "mongoose";

// POST Controllers

export const createUser = async (req, res) => {
  const body = req.body;
  
  try {
    res.status(201).json('working');
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

