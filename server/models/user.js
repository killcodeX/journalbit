import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  avatar: { type: String, default: "https://res.cloudinary.com/journalbit/image/upload/v1629391409/userAvatar/l5vfhwbqgmynska51c2b.jpg" },
  email: { type: String, required: true },
  password: { type: String, required: true },
  work: { type: String, default: "Default Work" },
  city: { type: String, default: "Default City" },
  bio: { type: String, default: "Hey! I am new to this Universe!" },
  linkedin: { type: String },
  twitter: { type: String },
  reddit: { type: String },
  facebook: { type: String },
  followers:[{ type: ObjectId, ref:"UserMessage"}],
  following:[{ type: ObjectId, ref:"UserMessage"}],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const UserMessage = mongoose.model("UserMessage", postSchema);

export default UserMessage;
