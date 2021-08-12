import React from "react";
import { Seprator } from "../../components/UI/Typograpghy/style";
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
                dedication it takes to grow in my career. With me, you have
                someone who not only knows how to be a team player but also when
                to take charge in order to get the job done right and on time. I
                am someone who does not shy away from commitment once it has
                been made, and will prove to be more than a worthwhile
                investment if given a chance.
              </UserDescription>
            </UserDetails>
            <SocialMedia>hi</SocialMedia>
          </ProfileDetails>
          <ProfilePost />
        </ProfileWrapper>
      </div>
    </div>
  );
}
