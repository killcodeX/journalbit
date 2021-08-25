import React from "react";
import {
  PostCardWrapper,
  PostCardToolBar,
  ProfileWrapper,
  PostAuthor,
  PostDetail,
  PostTime,
  PostFooter,
} from "./style";
import { Seprator } from "../UI/Typograpghy/style";
import { useSelector } from "react-redux";
import Feed from "./feed";
import Engagement from "./engagement";
import Comment from "./comment";
import { AiOutlineEllipsis, AiOutlineSwap } from 'react-icons/ai'

export default function Post({ post }) {
  const userId = useSelector((state) => state.auth.user._id);
  const userAvatar = useSelector((state) => state.auth.user.avatar);

  return (
    <PostCardWrapper className="mb-3">
      <PostCardToolBar>
        <ProfileWrapper>
          <img src={post.postedBy.avatar} alt="profile" />
        </ProfileWrapper>
        <PostDetail>
          <PostAuthor>{`${post.postedBy.fname} ${post.postedBy.lname}`}</PostAuthor>
          <PostTime>{post.postedBy.work}</PostTime>
        </PostDetail>
        <AiOutlineEllipsis/>
      </PostCardToolBar>
      <Feed post={post} />
      <PostFooter>
        <span>{post.likes.length} likes</span>
        <span className='px-3'><AiOutlineSwap/></span>
        <span>{post.comments.length} comments</span>
        <Seprator />
        <Engagement post={post} userId={userId} />
        <Seprator />
        <Comment userAvatar={userAvatar} postId={post._id} />
      </PostFooter>
    </PostCardWrapper>
  );
}
