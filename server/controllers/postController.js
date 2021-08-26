import PostMessage from "../models/post.js";
import { getMetData } from "../helpers/metscrapper.js";

// POST Controllers
export const newPost = async (req, res) => {
  const post = req.body;
  const data = await getMetData(post.url);
  try {
    const result = await PostMessage.save({
      ...data,
      topic:post.topic,
      postedBy:req.userId
    })
    let newData = await result.populate("postedBy", "id fname lname avatar")
    res.status(200).json({ result: newData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
