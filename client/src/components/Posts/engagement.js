import React from "react";
import { PostEngagement, EngagButton } from "./style";
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineSend,
  AiFillHeart,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getlikePost, getunlikePost } from "../../redux/actions/postactions";

export default function Engagement({ post, userId, showComments, setShowComments}) {
  const dispatch = useDispatch();

  const handleLike = () => {
    if (post.likes.includes(userId)) {
      dispatch(getunlikePost(post._id));
      console.log("you unliked this post");
    } else {
      dispatch(getlikePost(post._id));
      console.log("you liked this post");
    }
  };

  return (
    <PostEngagement>
      <EngagButton onClick={handleLike}>
        {post.likes.includes(userId) ? (
          <AiFillHeart style={{ color: "red" }} />
        ) : (
          <AiOutlineHeart />
        )}
        {` `}Like
      </EngagButton>
      <EngagButton onClick={() => setShowComments(!showComments)}>
        <AiOutlineComment />
        {` `}Comment
      </EngagButton>
      <EngagButton disabled>
        <AiOutlineSend />
        {` `}Share
      </EngagButton>
    </PostEngagement>
  );
}
