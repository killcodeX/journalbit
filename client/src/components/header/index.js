import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineUser, AiOutlineArrowRight } from "react-icons/ai";
import { Menu, Dropdown } from "antd";
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
        <Dropdown overlay={menu}>
          <ProfileWrapper>
            <img
              src={process.env.PUBLIC_URL + "/assets/profileImage.jpg"}
              alt="profile"
            />
          </ProfileWrapper>
        </Dropdown>
      </InfoWrapper>
    </HeaderWrapper>
  );
}

const menu = (
  <Menu>
    <Menu.Item icon={<AiOutlineUser />}>
      Profile
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item icon={<AiOutlineArrowRight />} danger>LogOut</Menu.Item>
  </Menu>
);
