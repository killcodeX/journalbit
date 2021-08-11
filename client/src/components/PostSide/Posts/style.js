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
  padding: 10px 20px;
`;

export const ProfileWrapper = styled.div`
  width: 45px;
  height: 45px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 15px;
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
  background-color: #eef3f8;
`;

export const PostContainer = styled.div``;

export const ArticleLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const ArticleImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const PostImage = styled.img`
  width: 589px;
  object-position: center;
  object-fit: cover;
  background-position: 50%;
  background-size: cover;
`;

export const ArticleDescContainer = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: flex-start;
  transition: background-color 0.6s ease-in-out, border 0.6s ease-in-out;
`;

export const ArticleDesc = styled.div`
  display: flex !important;
  flex-direction: column;
`;

export const ArticleTitle = styled.div`
  color: #181c32;
  font-size: 16px;
  font-weight: bold;
`;

export const ArticeExcerpt = styled.div`
  font-size: 14px;
  color: #b5b5c3;
`;

export const ArticleDetails = styled.div`
  display: flex;
  aling-items: center;
  justify-content: space-between;
  color: #181c32;
  font-size: 14px;
`;

export const PostFooter = styled.div`
  padding: 20px;
`;

export const PostEngagement = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding-top:5px;
`;

export const EngagButton = styled.button`
  background:transparent;
  border:none;
  padding:10px 15px;
  font-size:17px;
  &:hover{
    background-color:#EEF0F6;
  }
`
