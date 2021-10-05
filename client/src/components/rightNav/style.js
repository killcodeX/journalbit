import styled from "styled-components";

export const RightNavWrapper = styled.div`
  // background-color: white;
  // position: fixed;
  //position: absolute;
  //height: 100%;
  //width: inherit;
  width: 125%;
  //right: -70px;
  //top: 100px;

  margin-top: 100px;
  margin-left: -10px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const NewsWrapper = styled.a`
  display: flex;
  align-items: center;
  width: 290px;
  margin: 10px 0;
  padding: 5px;
  &:hover {
    background-color: #f2f2f2;
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
  font-size: 13px;
`;

export const SecondWrapper = styled.div`
  //position: ${(props) => props.position};
  //top: 90px;
  width: 325px;
  margin: -10px;
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
  font-size: 14px;
  font-family: poppins;
  padding-bottom: 5px;
`;
export const FollowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 1.8rem;
  color: blue;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  font-family: poppins;
  font-size: 0.9rem;
  background-color: #f2f2f5;
`;
