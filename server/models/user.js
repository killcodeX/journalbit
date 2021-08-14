import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  fname: String,
  lname: String,
  image: String,
  email: String,
  password:String,
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