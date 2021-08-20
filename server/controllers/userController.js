import UserMessage from "../models/user.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
  console.log('id received', id);
  try {
    const existingUser = await UserMessage.findById(id);
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    res.status(200).json({ result: existingUser }); //{ result: existingUser }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
