import PostMessage from "../models/post.js";

// Delete Controllers
export const getdeletePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  // try {
  //   const result = await PostMessage.findByIdAndDelete(postId);
  //   res.status(200).json({ result: result });
  // } catch (error) {
  //   res.status(404).json({ message: error.message });
  // }
};
