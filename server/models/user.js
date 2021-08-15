import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  fname: String,
  lname: String,
  image: String,
  email: String,
  password: String,
  // bio: { type: String, default: "Hey! I am new to this Universe!" },
  // posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  // followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  // following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  // notifications: [{ type: Schema.Types.ObjectId, ref: "Notification" }],
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
