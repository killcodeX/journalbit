import React from "react";
import { Seprator, HeadingWrapper } from "../../components/UI/Typograpghy/style";
import ProfilePost from "./profileDetails";
import {
  ProfileWrapper,
  BannerWrapper,
  ImageBanner,
  AvatarWrapper,
  ProfileDetails,
  UserDetails,
  UserName,
  UserDescription,
  SocialMedia,
  Followers
} from "./style";

export default function Profile() {
  return (
    <div className="section">
      <div className="container">
        <ProfileWrapper>
          <BannerWrapper>
            <ImageBanner
              src={process.env.PUBLIC_URL + "/assets/banner2.jpg"}
              alt="banner"
            />
            <AvatarWrapper>
              <img
                src={process.env.PUBLIC_URL + "/assets/profileImage.jpg"}
                alt="profile"
              />
            </AvatarWrapper>
          </BannerWrapper>
          <ProfileDetails>
            <Seprator />
            <UserDetails>
              <UserName>Aaquib Ahmed</UserName>
              <UserDescription>
                Perhaps the most important lesson I have learned during my
                tenure thus far in life is stepping out of my comfort zone. I
                wish to broaden my horizons and put in the hard work and
                dedication it takes to grow in my career.
              </UserDescription>
            </UserDetails>
            <SocialMedia>
              <Followers>
                <HeadingWrapper>0</HeadingWrapper>
                <HeadingWrapper>Post</HeadingWrapper>
              </Followers>
              <Followers>
                <HeadingWrapper>0</HeadingWrapper>
                <HeadingWrapper>Followers</HeadingWrapper>
              </Followers>
              <Followers>
                <HeadingWrapper>0</HeadingWrapper>
                <HeadingWrapper>Following</HeadingWrapper>
              </Followers>
            </SocialMedia>
          </ProfileDetails>
          <ProfilePost />
        </ProfileWrapper>
      </div>
    </div>
  );
}
