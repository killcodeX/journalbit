import React, { useState } from "react";
import {
  PostCardWrapper,
  PostCardToolBar,
  ProfileWrapper,
  PostAuthor,
  PostDetail,
  PostTime,
  PostBody,
  PostImage,
  PostContainer,
  ArticleLink,
  ArticleImageContainer,
  ArticleDescContainer,
  ArticleDesc,
  ArticleTitle,
  ArticeExcerpt,
  ArticleDetails,
  PostFooter,
  PostEngagement,
  EngagButton,
} from "./style";
import { Seprator } from "../UI/Typograpghy/style";
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineSend,
  AiFillHeart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getlikePost, getunlikePost } from "../../redux/actions/postactions";

export default function Post({ post }) {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user._id)

  const handleLike = () => {
    if(post.likes.includes(userId)){
      dispatch(getunlikePost(post._id))
      console.log('you unliked this post')
    } else {
      dispatch(getlikePost(post._id))
      console.log('you liked this post')
    }
  }

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
      <PostBody>
        <PostContainer>
          <ArticleLink href={post.url}>
            <ArticleImageContainer>
              <PostImage src={post.image} alt={post.title} />
            </ArticleImageContainer>
          </ArticleLink>
          <ArticleDescContainer>
            <ArticleDesc>
              <ArticleTitle>{post.title}</ArticleTitle>
              <ArticeExcerpt>{post.description}</ArticeExcerpt>
              <ArticleDetails>
                <span>
                  <strong>Topic:</strong> {post.topic}
                </span>
                <span>
                  <strong>Author:</strong> {post.author}
                </span>
                <span>
                  <strong>Publisher:</strong> {post.publisher}
                </span>
              </ArticleDetails>
            </ArticleDesc>
          </ArticleDescContainer>
        </PostContainer>
      </PostBody>
      <PostFooter>
        {post.likes.length} likes
        <Seprator />
        <PostEngagement>
          <EngagButton onClick={handleLike}>
            {post.likes.includes(userId) ? (
              <AiFillHeart style={{ color: "red" }} />
            ) : (
              <AiOutlineHeart />
            )}
            {` `}Like
          </EngagButton>
          <EngagButton>
            <AiOutlineComment />
            {` `}Comment
          </EngagButton>
          <EngagButton disabled>
            <AiOutlineSend />
            {` `}Share
          </EngagButton>
        </PostEngagement>
      </PostFooter>
    </PostCardWrapper>
  );
}
