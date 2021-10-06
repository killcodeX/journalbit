import React from "react";
import { FcApproval } from "react-icons/fc";
import { AiOutlineUser, AiFillEnvironment } from "react-icons/ai";
import { HeadingWrapper } from "../../../components/UI/Typograpghy/style";
import { CardWrapper } from "../../../components/UI/cards/style";
import { ProfileImageWrapper, OnlineIndicator, UserName } from "./style";
import { Followers } from "../../UserProfile/style";
import { Progress } from "antd";
import { useSelector } from "react-redux";

export default function DisplayUser({ user }) {
  const totalPost = useSelector((state) => state.post.userPost);
  return (
    <CardWrapper>
      <div className="d-flex flex-wrap flex-sm-nowrap">
        <ProfileImageWrapper>
          <img
            src={user.avatar}
            alt="image"
          />
          <OnlineIndicator />
        </ProfileImageWrapper>
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center mb-2">
                <UserName>{`${user.fname} ${user.lname}`}</UserName>
                <span style={{ marginTop: "-10px" }} className="fs-4">
                  <FcApproval />
                </span>
              </div>
              <div
                style={{ color: "#b5b5c3" }}
                className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2"
              >
                <div className="d-flex align-items-center me-5 mb-2">
                  <span className="me-1">
                    <AiOutlineUser />
                  </span>
                  <span>{user.work}</span>
                </div>
                <div className="d-flex align-items-center me-5 mb-2">
                  <span className="me-1">
                    <AiFillEnvironment />
                  </span>
                  <span>{user.city}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="d-flex">
              <Followers className="py-2 px-2 me-2 mb-3">
                <HeadingWrapper>{totalPost.length}</HeadingWrapper>
                <HeadingWrapper>Post</HeadingWrapper>
              </Followers>
              <Followers className="py-2 px-2 me-2 mb-3">
                <HeadingWrapper>{user?.followers?.length}</HeadingWrapper>
                <HeadingWrapper>Followers</HeadingWrapper>
              </Followers>
              <Followers className="py-2 px-2 me-2 mb-3">
                <HeadingWrapper>{user?.following?.length}</HeadingWrapper>
                <HeadingWrapper>Following</HeadingWrapper>
              </Followers>
            </div>
            {/* <div
              style={{ width: "200px", marginTop: "-30px" }}
              className="d-flex align-items-center flex-column"
            >
              <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                <span className="fs-6">Profile Completion</span>
              </div>
              <Progress percent={50} />
            </div> */}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
