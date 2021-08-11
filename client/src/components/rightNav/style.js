import styled from "styled-components";

export const RightNavWrapper = styled.div`
  // background-color: white;
  position: fixed;
  height: 100%;
  width: inherit;
  right: 50px;
  top: 100px;
`;

export const NewsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 290px;
  margin: 10px 0;
`;

export const NewsImageWrapper = styled.div`
  display: inline-block;
  flex-shrink: 0;
  position: relative;
  border-radius: 0.675rem;
  margin-right: 1.05rem !important;
`;

export const NewsImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
  object-fit: cover;
`;
