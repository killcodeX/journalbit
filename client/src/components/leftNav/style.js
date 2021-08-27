import styled from "styled-components";

export const LeftNavWrapper = styled.div`
  // background-color: white;
  // position: fixed;
  //position: absolute;
  //height: 100%;
  //width: inherit;
  width: 225px;
  //left: 75px;
  //left: -40px;
  //top: 100px;

  margin-top: 100px;
  margin-left: -40px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const FirstWrapper = styled.div`
  // background-color: white;
  // position: fixed;
  //position: absolute;
  //height: 100%;
  //width: inherit;
  //width: 125%;
  //left: 75px;
  //left: -40px;
  //top: 100px;
`;

export const SecondWrapper = styled.div`
  position: ${props => props.position};
  top: 90px;
  width: 225px;
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
