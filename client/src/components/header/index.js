import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineUser, AiOutlineArrowRight } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { Menu, Dropdown } from "antd";
import { Link, useHistory } from "react-router-dom";
import { receiveLogout } from "../../redux/actions/useractions";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
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
  const User = useSelector((state) => state.auth.user);
  const history = useHistory();

  const handlelogout = ({ key }) => {
    if (key == 3) {
      dispatch(receiveLogout());
      history.push("/login");
    }
  };

  if (User == undefined) {
    return <Spin />;
  }

  const menu = (
    <Menu onClick={handlelogout}>
      <Menu.Item key="1" icon={<AiOutlineUser />}>
        <Link to={`/profile/${User._id}`}>View Profile</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<FcSettings />}>
        <Link to="/account-setting">Account Setting</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" icon={<AiOutlineArrowRight />} danger>
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
            <img src={User.avatar} alt="profile" />
          </ProfileWrapper>
        </Dropdown>
      </InfoWrapper>
    </HeaderWrapper>
  );
}
