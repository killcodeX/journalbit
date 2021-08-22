import React, { useEffect } from "react";
import Posts from "../../components/Posts";
import { CardWrapper, CardHeader } from "../../components/UI/cards/style";
import { TitleWrapper } from "../../components/UI/Typograpghy/style";
import {
  AiFillContainer,
  AiFillEdit,
  AiFillEnvironment,
  AiFillGithub,
  AiFillLinkedin,
  AiFillRedditCircle,
  AiFillFacebook,
} from "react-icons/ai";
import { SocialMediaProfiles, UserIntro } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getOnlyUserPost } from "../../redux/actions/postactions";

export default function ProfileDetails({ user }) {
  const dispatch = useDispatch();
  const userPosts = useSelector((state) => state.post.userPost);
  console.log(userPosts);
  useEffect(() => {
    dispatch(getOnlyUserPost());
  }, []);

  return (
    <div className="pt-4">
      <div className="row">
        <div className="col-sm-4">
          <CardWrapper>
            <CardHeader>
              <TitleWrapper>
                <AiFillContainer />
                {` `}Intro
              </TitleWrapper>
            </CardHeader>
            <UserIntro>
              <p>
                <strong>
                  <AiFillEdit />
                  {` `}Work as
                </strong>
                {` `}
                {user.work}
              </p>
              <span>
                <strong>
                  <AiFillEnvironment />
                  {` `}Lives in
                </strong>
                {` `}
                {user.city}
              </span>
              <SocialMediaProfiles>
                <AiFillGithub />
                <AiFillLinkedin />
                <AiFillRedditCircle />
                <AiFillFacebook />
              </SocialMediaProfiles>
            </UserIntro>
          </CardWrapper>
        </div>
        <div className="col-sm-8">
          {(userPosts && userPosts.length > 0)
            ? userPosts.map((post) => {
                return <Posts key={post._id} post={post} />;
              })
            : 'loading...'}
        </div>
      </div>
    </div>
  );
}
