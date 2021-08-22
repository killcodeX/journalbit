import PostMessage from "../models/post.js";
import mongoose from "mongoose";

// Get Controllers

export const getAllPost = async (req, res) => {
  try {
    let data = await PostMessage.find().populate("postedBy", "id fname lname avatar work")
    //console.log(data)
    res.status(200).json({result: data});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserPost = async (req, res) => {
  try {
    let data = await PostMessage.find({postedBy:req.userId}).populate("postedBy", "id fname lname avatar work")
    //console.log(data)
    res.status(200).json({result: data});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};