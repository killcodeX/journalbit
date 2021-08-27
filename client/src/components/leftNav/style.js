import styled from "styled-components";

export const LeftNavWrapper = styled.div`
  // background-color: white;
  position: fixed;
  height: 100%;
  width: inherit;
  left: 75px;
  top: 100px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const SelectTopic = styled.div`
  padding:5px 10px;
  margin:5px; 0;
  cursor:pointer;
  &:hover{
    color:white;
    background-color:#36A3FF;
  }

`;

export const PeopleWrapper = styled.div``;

export const Profiles = styled.div``;

export const ProfileWrapper = styled.div`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
