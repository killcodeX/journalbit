import UserMessage from "../models/user.js";
import mongoose from "mongoose";

// POST Controllers

export const createUser = async (req, res) => {
  const body = req.body;
  console.log(body)
  try {
    res.status(201).json('sign up working');
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const body = req.body;
  console.log(body)
  try {
    res.status(201).json('login working');
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
