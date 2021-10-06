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
  position: ${(props) => props.position};
  top: 90px;
  width: 225px;
`;

export const SelectTopic = styled.div`
  padding:5px 10px;
  margin:5px; 0;
  cursor:pointer;
  color:${props => props.select? "white": ""};
  background-color: ${props => props.select? "#36A3FF":""};
  &:hover{
    color:white;
    background-color:#36A3FF;
  }

`;

export const Profiles = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 40px;
`;

export const ProfileWrapper = styled.div`
  width: 45px;
  height: 45px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PeopleWrapper = styled.div`
  padding-left: 12px;
`;

export const ProfileName = styled.div`
  font-size:14px;
  font-family:poppins;
  padding-bottom:5px;
`;
export const FollowButton = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  padding: .2rem 1.8rem;
  color: blue;
  border:none;
  border-radius: 10px;
  font-weight: 500;
  font-family: poppins;
  font-size: 0.9rem;
  background-color:#f2f2f5;
`;
