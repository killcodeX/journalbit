import React from "react";
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
  ArticleImageContainer
} from "./style";

export default function Post({ link }) {
  return (
    <PostCardWrapper className="mt-4">
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
        </PostContainer>
      </PostBody>
    </PostCardWrapper>
  );
}
