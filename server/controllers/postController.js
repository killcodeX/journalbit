import PostMessage from "../models/post.js";
import UserMessage from "../models/user.js";
import { getMetData } from "../helpers/metscrapper.js";

// POST Controllers
export const newPost = async (req, res) => {
  const post = req.body;
  const data = await getMetData(post.url);
  try {
    const result = await PostMessage.create({
      ...data,
      topic:post.topic,
      postedBy:req.userId
    })
    let newData = await PostMessage.find(result._id).populate("postedBy", "id fname lname avatar")
    res.status(200).json({ result: newData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const filterPost = async (req, res) => {
  const { topic } = req.body;
  try {
    let data = await UserMessage.findById(req.userId);
    let result = await PostMessage.find({
      postedBy: { $in: [...data.following, req.userId ]},
    }).populate("postedBy comments.postedBy", "id fname lname avatar work").sort('-createdAt');
    let finalResult = result.filter(post => post.topic == topic.toLowerCase())
    res.status(200).json({ result: finalResult });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}