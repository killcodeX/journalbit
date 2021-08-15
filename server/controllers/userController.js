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
  const body = req.body;
  console.log(body);
  try {
    res.status(201).json("login working");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
