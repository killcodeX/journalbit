import styled from "styled-components";

export const PostCardWrapper = styled.div`
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #eff2f5;
  border-radius: 0.475rem;
  box-shadow: 0 0 20px 0 rgb(76 87 125 / 2%);
  height: auto;
`;

export const PostCardToolBar = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  flex-wrap: wrap;
  padding: 20px;
`;

export const ProfileWrapper = styled.div`
  width: 35px;
  height: 35px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 30px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PostDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const PostAuthor = styled.div`
  font-size: 1.05rem;
`;

export const PostTime = styled.div`
  color: #b5b5c3 !important;
`;

export const PostBody = styled.div`
  overflow: hidden;
  margin: 0;
  background-color: #eef3f8;
`;

export const PostContainer = styled.div`
  height: 0;
  padding-top: 52.3%;
  width: 50%;
  position: relative;
  flex-shrink: 0;
`;

export const ArticleLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline-offset: -1px;
  text-decoration: none;
  cursor: pointer;
`;

export const ArticleImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const PostImage = styled.img`
  position: static;
  top: auto;
  left: auto;
  object-position: center;
  object-fit: cover;
  background-position: 50%;
  background-size: cover;
`;
