import React, { useState } from "react";
import {
  PostCardWrapper,
  PostCardToolBar,
  ProfileWrapper,
  PostAuthor,
  PostDetail,
  PostTime,
  PostFooter,
  CommentWrapper,
  CommentAvatar,
  CommentBox,
  CommentInput,
} from "./style";
import { Seprator } from "../UI/Typograpghy/style";
import { useDispatch, useSelector } from "react-redux";
import Feed from './feed'
import Engagement from "./engagement";

export default function Post({ post }) {
  const dispatch = useDispatch();
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
      </PostCardToolBar>
      <Feed post={post}/>
      <PostFooter>
        {post.likes.length} likes
        <Seprator />
        <Engagement post={post} userId={userId}/>
        <Seprator />
        <CommentWrapper>
          <CommentAvatar>
            <img src={userAvatar} alt="profile" />
          </CommentAvatar>
          <CommentBox>
            <CommentInput />
          </CommentBox>
        </CommentWrapper>
      </PostFooter>
    </PostCardWrapper>
  );
}
