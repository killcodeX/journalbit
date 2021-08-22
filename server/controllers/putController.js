import PostMessage from "../models/post.js";

// PUT Controllers
export const getlikePost = async (req, res) => {
  const { postId } = req.body;
  console.log(req.body)
  console.log(req.userId);
  try {
    const result = await PostMessage.findByIdAndUpdate(postId,{
        $push:{likes:req.userId}
    }, { new: true});
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getunlikePost = async (req, res) => {
    const { postId } = req.body;
    console.log(req.body)
    console.log(req.userId);
    try {
      const result = await PostMessage.findByIdAndUpdate(postId,{
          $pull:{likes:req.userId}
      }, { new: true});
      res.status(200).json({ result: result });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
