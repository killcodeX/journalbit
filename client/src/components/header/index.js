import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import {
  HeaderWrapper,
  LogoWrapper,
  InfoWrapper,
  NotificationWrapper,
  PulseWrapper,
  ProfileWrapper,
} from "./style";

export default function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>Journal Bit</LogoWrapper>
      <InfoWrapper>
        <NotificationWrapper>
          <BsFillBellFill />
          <PulseWrapper />
        </NotificationWrapper>
        <ProfileWrapper>
          <img
            src={process.env.PUBLIC_URL + "/assets/profileImage.jpg"}
            alt="profile"
          />
        </ProfileWrapper>
      </InfoWrapper>
    </HeaderWrapper>
  );
}
