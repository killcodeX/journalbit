import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  url: { type: String, required: true },
  topic: { type: String },
  postedBy: { type: ObjectId, ref: "UserMessage" },
  likes: [{ type: ObjectId, ref: "UserMessage" }],
  comments: [
    { type: String, postedBy: { type: ObjectId, ref: "UserMessage" } },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;