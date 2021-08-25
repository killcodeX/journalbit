import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  title:{ type: String, required: true },
  author:{ type: String, required: true },
  description:{ type: String, required: true },
  image: { type: String, required: true },
  publisher: { type: String, required: true },
  url: { type: String, required: true },
  topic: { type: String, required: true },
  postedBy: { type: ObjectId, ref: "UserMessage" },
  likes: [{ type: ObjectId, ref: "UserMessage" }],
  comments: [
    { text: String, postedBy: { type: ObjectId, ref: "UserMessage" } },
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
