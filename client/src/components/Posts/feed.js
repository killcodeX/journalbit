import React from "react";
import {
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
} from "./style";

export default function Feed({post}) {
  return (
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
  );
}
