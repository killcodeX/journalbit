import styled from "styled-components";

export const RightNavWrapper = styled.div`
  // background-color: white;
  // position: fixed;
  position: absolute;
  //height: 100%;
  //width: inherit;
  width:125%;
  right: -70px;
  top: 100px;

  @media(max-width:480px){
    display:none;
  }
`;

export const NewsWrapper = styled.a`
  display: flex;
  align-items: center;
  width: 290px;
  margin: 10px 0;
  padding:5px;
  &:hover{
    background-color:#F2F2F2;
  }
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

export const NewsHeading = styled.h6`
  font-size:13px;
`;