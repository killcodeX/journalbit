import React, { useEffect } from "react";
import {
  Seprator,
  HeadingWrapper,
} from "../../components/UI/Typograpghy/style";
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
  Followers,
} from "./style";
import ProfilePost from "./profileDetails";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserdata } from "../../redux/actions/useractions";

export default function Profile() {
  const User = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserdata(id));
  }, []);
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
              <img src={User.avatar} alt="profile" />
            </AvatarWrapper>
          </BannerWrapper>
          <ProfileDetails>
            <Seprator />
            <UserDetails>
              <UserName>{`${User.fname} ${User.lname}`}</UserName>
              <UserDescription>{User.bio}</UserDescription>
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
          <ProfilePost user={User} />
        </ProfileWrapper>
      </div>
    </div>
  );
}
