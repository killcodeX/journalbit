import PostMessage from "../models/post.js";

// Delete Controllers
export const getdeletePost = async (req, res) => {
  const { id } = req.params;
  if(id == req.userId){
    res.status(404).json({ message: 'Not Authorized' });
  }
  try {
    await PostMessage.findByIdAndDelete(id);
    res.status(200).json({ result: 'Post Removed Successfully !!!' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
