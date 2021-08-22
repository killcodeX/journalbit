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

export default function Post({ post }) {
  const [like, setLike] = useState(false);
  return (
    <PostCardWrapper className='mb-3'>
      <PostCardToolBar>
        <ProfileWrapper>
          <img
            src={post.postedBy.avatar}
            alt="profile"
          />
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
        1 likes
        <Seprator />
        <PostEngagement>
          <EngagButton onClick={() => setLike(!like)}>
            {like ? (
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
