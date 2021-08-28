import UserMessage from "../models/user.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const botId = "6128ccbc7abb0e44a0ac22ce";

// POST Controllers

// for signup
export const createUser = async (req, res) => {
  const { fname, lname, email, password } = req.body;
  console.log(fname, lname, email, password);
  try {
    const existingUser = await UserMessage.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exist" });

    const hashPassword = await bcrypt.hash(password, 12);

    const result = await UserMessage.create({
      email,
      password: hashPassword,
      fname: fname,
      lname: lname,
    });

    // New user following bot
    await UserMessage.findByIdAndUpdate(result._id,{$push: { followers: botId },},{ new: true });
    await UserMessage.findByIdAndUpdate(result._id,{$push: { following: botId },},{ new: true });

    // bot following new user
    await UserMessage.findByIdAndUpdate(botId,{$push: { following: result._id },},{ new: true });
    await UserMessage.findByIdAndUpdate(botId,{$push: { followers: result._id },},{ new: true });
     
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// for login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const existingUser = await UserMessage.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({ message: "Your username and/or password do not match" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET_KEY
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// for updating user
export const updateUser = async (req, res) => {
  const {
    id,
    avatar,
    fname,
    lname,
    work,
    city,
    bio,
    linkedin,
    twitter,
    reddit,
    facebook,
  } = req.body;
  const data = req.body;
  console.log({
    id: id,
    avatar: avatar,
    fname: fname,
    lname: lname,
    work: work,
    city: city,
    bio: bio,
    linkedin: linkedin,
    twitter: twitter,
    reddit: reddit,
    facebook: facebook,
  });
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No User with that Id");

    const updatedUser = await UserMessage.findByIdAndUpdate(id, data, {
      new: true,
    });

    res.status(200).json({ result: updatedUser });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const existingUser = await UserMessage.findById(id);
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    res.status(200).json({ result: existingUser }); //{ result: existingUser }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// to follow any user Controllers
export const getfollowerUser = async (req, res) => {
  const { id } = req.params;
  console.log(req.userId == id);
  try {
    const followUser = await UserMessage.findByIdAndUpdate(
      id,
      { $push: { followers: req.userId } },
      { new: true }
    );

    const loggedUser = await UserMessage.findByIdAndUpdate(
      req.userId,
      { $push: { following: id } },
      { new: true }
    );
    res.status(200).json({ followUser: followUser, loggedUser: loggedUser });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// unfollow Controllers
export const getunfollowerUser = async (req, res) => {
  const { id } = req.params;
  console.log(req.userId == id);
  try {
    const followUser = await UserMessage.findByIdAndUpdate(
      id,
      { $pull: { followers: req.userId } },
      { new: true }
    );

    const loggedUser = await UserMessage.findByIdAndUpdate(
      req.userId,
      { $pull: { following: id } },
      { new: true }
    );
    res.status(200).json({ followUser: followUser, loggedUser: loggedUser });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get All User Controllers
export const getAllUser = async (req, res) => {
  try {
    const result = await UserMessage.find(
      {},
      { fname: 1, lname: 1, avatar: 1, followers: 1 }
    );
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Delete Controllers
export const getdeleteUser = async (req, res) => {
  const { id } = req.params;
  // try {
  //   const result = await PostMessage.findByIdAndDelete(postId);
  //   res.status(200).json({ result: result });
  // } catch (error) {
  //   res.status(404).json({ message: error.message });
  // }
};
