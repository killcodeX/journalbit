import styled from "styled-components";

export const ProfileWrapper = styled.div`
  margin: 87px auto;
  //background: #fff;
  padding-bottom: 30px;
  width: 80%;

  @media(max-width:480px){
    width: 100%;
  }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 0%;
  margin: 0;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
`;

export const ImageBanner = styled.img`
  display: block;
  width: 100%;
  height: 350px;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 280px;
  left: 50%;
  transform: translate(-50%);
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid #fff;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileDetails = styled.div`
  padding: 90px 30px 20px 30px;
  background: #fff;
`;

export const UserDetails = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserName = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: #181c32;
  text-align: center;
`;
export const UserDescription = styled.div`
  width: 700px;
  margin: 10px auto;
  text-align: center;
  font-family: "poppins", sans-seris;
  font-size: 15px;
  color: #a1a5b7;

  @media(max-width:480px){
    width: 260px;
  }
`;

export const SocialMedia = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;

  @media(max-width:480px){
    flex-direction: column;
  }
`;

export const Followers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:0 20px;
`;

export const UserIntro = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family:poppins;
`;

export const SocialMediaProfiles = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  color: #A1B8DD;
  cursor:pointer;
`;

export const FollowButton = styled.button`
  // display:block;
  // margin:10px auto;
  padding:0.5rem 2.5rem;
  color:blue;
  border:none;
  border-radius:10px;
  font-weight:500;
  font-family:poppins;
  font-size:0.9rem;

  @media(max-width:480px){
    margin-top: 20px;
  }
`;