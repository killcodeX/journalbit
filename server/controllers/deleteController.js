import PostMessage from "../models/post.js";

// Delete Controllers
export const getdeletePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await PostMessage.findByIdAndDelete(id);
    res.status(200).json({ result: 'Post Removed Successfully !!!' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
