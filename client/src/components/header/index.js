import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineUser, AiOutlineArrowRight } from "react-icons/ai";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
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
      <LogoWrapper>
        <Link to="/" style={{textDecoration: 'none', color:'#181C32'}}>Journal Bit</Link>
      </LogoWrapper>
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
      <Link to="/profile">Profile</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item icon={<AiOutlineArrowRight />} danger>
      <Link to="/login">LogOut</Link>
    </Menu.Item>
  </Menu>
);
