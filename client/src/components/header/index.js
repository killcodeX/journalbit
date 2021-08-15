import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineUser, AiOutlineArrowRight } from "react-icons/ai";
import { Menu, Dropdown, message } from "antd";
import { Link, useHistory } from "react-router-dom";
import { receiveLogout } from "../../redux/actions/useractions";
import { useDispatch } from "react-redux";
import {
  HeaderWrapper,
  LogoWrapper,
  InfoWrapper,
  NotificationWrapper,
  PulseWrapper,
  ProfileWrapper,
} from "./style";

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handlelogout = ({ key }) => {
    if (key == 2) {
      dispatch(receiveLogout())
      history.push('/login')
    }
  };

  const menu = (
    <Menu onClick={handlelogout}>
      <Menu.Item key="1" icon={<AiOutlineUser />}>
        <Link to="/profile">View Profile</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2" icon={<AiOutlineArrowRight />} danger>
        Log Out
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link to="/" style={{ textDecoration: "none", color: "#181C32" }}>
          Journal Bit
        </Link>
      </LogoWrapper>
      <InfoWrapper>
        <NotificationWrapper>
          <BsFillBellFill />
          <PulseWrapper />
        </NotificationWrapper>
        <Dropdown overlay={menu} trigger={["click"]}>
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
