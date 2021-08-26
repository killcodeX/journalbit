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
  FollowButton,
} from "./style";
import ProfilePost from "./profileDetails";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getUserdata, getUserfollower, getUserunfollower } from "../../redux/actions/useractions";

export default function Profile() {
  const loggedUser = useSelector((state) => state.auth.user);
  const User = useSelector((state) => state.auth.userProfile);
  const totalPost = useSelector((state) => state.post.userPost);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserdata(id));
  }, [id]);

  const handleFollow = (setting) => {
    if (setting == "follow") {
      dispatch(getUserfollower(id));
    } else{
      dispatch(getUserunfollower(id))
    }
  };

  if(!User.avatar){
    return <span>Loading...</span>
  }

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
            <Seprator />
            <SocialMedia>
              <div className="d-flex flex-row">
                <Followers>
                  <HeadingWrapper>{totalPost.length}</HeadingWrapper>
                  <HeadingWrapper>Post</HeadingWrapper>
                </Followers>
                <Followers>
                  <HeadingWrapper>{User.followers.length}</HeadingWrapper>
                  <HeadingWrapper>Followers</HeadingWrapper>
                </Followers>
                <Followers>
                  <HeadingWrapper>{User.following.length}</HeadingWrapper>
                  <HeadingWrapper>Following</HeadingWrapper>
                </Followers>
              </div>
              {User._id != loggedUser._id ? (
                User.followers.includes(loggedUser._id) ? (
                  <FollowButton onClick={() => handleFollow("unfollow")}>
                    Unfollow
                  </FollowButton>
                ) : (
                  <FollowButton onClick={() => handleFollow("follow")}>
                    Follow
                  </FollowButton>
                )
              ) : (
                <FollowButton>
                  <Link to="/account-setting">Edit Profile</Link>
                </FollowButton>
              )}
            </SocialMedia>
          </ProfileDetails>
          <ProfilePost user={User} id={id} />
        </ProfileWrapper>
      </div>
    </div>
  );
}
