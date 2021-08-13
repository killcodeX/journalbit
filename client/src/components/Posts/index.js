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

export default function Post({ link }) {
  const [like, setLike] = useState(false);
  return (
    <PostCardWrapper className='mb-3'>
      <PostCardToolBar>
        <ProfileWrapper>
          <img
            src={process.env.PUBLIC_URL + "/assets/profileImage.jpg"}
            alt="profile"
          />
        </ProfileWrapper>
        <PostDetail>
          <PostAuthor>The Humorists</PostAuthor>
          <PostTime>Just a regular teacher who likes to code</PostTime>
        </PostDetail>
      </PostCardToolBar>
      <PostBody>
        <PostContainer>
          <ArticleLink href={link.url}>
            <ArticleImageContainer>
              <PostImage src={link.image} alt={link.title} />
            </ArticleImageContainer>
          </ArticleLink>
          <ArticleDescContainer>
            <ArticleDesc>
              <ArticleTitle>{link.title}</ArticleTitle>
              <ArticeExcerpt>{link.description}</ArticeExcerpt>
              <ArticleDetails>
                <span>
                  <strong>Category:</strong> Technology
                </span>
                <span>
                  <strong>Author:</strong> {link.author}
                </span>
                <span>
                  <strong>Publisher:</strong> {link.publisher}
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
