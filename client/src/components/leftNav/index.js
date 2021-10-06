import React, { useEffect, useState } from "react";
import { TitleWrapper } from "../UI/Typograpghy/style";
import { CardHeader, CardWrapper } from "../UI/cards/style";
import {
  LeftNavWrapper,
  FirstWrapper,
  SecondWrapper,
  SelectTopic,
  PeopleWrapper,
  ProfileWrapper,
  Profiles,
  ProfileName,
  FollowButton,
} from "./style";
import { AiFillProject, AiOutlineTeam } from "react-icons/ai";
import { topics } from "../../mock-data";
import {
  getJournalUsers,
  getUserfollower,
  getUserunfollower,
} from "../../redux/actions/useractions";
import { getallPost, getFilterPost } from "../../redux/actions/postactions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function LeftNav() {
  const [positionY, setPositionY] = useState(0);
  const [activeTopic, setActiveTopic] = useState("All Posts");
  const dispatch = useDispatch();
  const loggedUsers = useSelector((state) => state.auth.user);
  const allUsers = useSelector((state) => state.auth.allUser);

  useEffect(() => {
    dispatch(getJournalUsers());
    window.addEventListener("scroll", () => setPositionY(window.scrollY));
  }, []);

  const handleFollow = (setting, id) => {
    if (setting == "follow") {
      dispatch(getUserfollower(id));
    } else {
      dispatch(getUserunfollower(id));
    }
    dispatch(getallPost());
  };

  const handleTopic = (topic) => {
    dispatch(getFilterPost(topic));
    setActiveTopic(topic)
  };

  return (
    <LeftNavWrapper>
      <FirstWrapper>
        <CardWrapper>
          <CardHeader>
            <TitleWrapper>
              <AiFillProject />
              {` `}Topics
            </TitleWrapper>
          </CardHeader>

          {topics.map((topic) => {
            return (
              <SelectTopic
                key={topic.id}
                onClick={() => handleTopic(topic.name)}
                select={topic.name == activeTopic}
              >
                {topic.name}
              </SelectTopic>
            );
          })}
        </CardWrapper>
      </FirstWrapper>

      <SecondWrapper position={positionY > 400 ? "fixed" : "inherit"}>
        <CardWrapper className="mt-4">
          <CardHeader>
            <TitleWrapper>
              <AiOutlineTeam />
              {` `}Peoples
            </TitleWrapper>
          </CardHeader>

          {allUsers?.length > 0
            ? allUsers.map((user) => {
                if (user._id != loggedUsers._id) {
                  return (
                    <Profiles key={user._id}>
                      <ProfileWrapper>
                        <img src={user.avatar} alt="profile" />
                      </ProfileWrapper>
                      <PeopleWrapper>
                        <ProfileName>
                          <Link
                            style={{ textDecoration: "none", color: "inherit" }}
                            to={`profile/${user._id}`}
                          >
                            {user.fname + " " + user.lname}
                          </Link>
                        </ProfileName>
                        {user.followers.includes(loggedUsers._id) ? (
                          <FollowButton
                            onClick={() => handleFollow("unfollow", user._id)}
                          >
                            UnFollow
                          </FollowButton>
                        ) : (
                          <FollowButton
                            onClick={() => handleFollow("follow", user._id)}
                          >
                            Follow
                          </FollowButton>
                        )}
                      </PeopleWrapper>
                    </Profiles>
                  );
                }
              })
            : null}
        </CardWrapper>
      </SecondWrapper>
    </LeftNavWrapper>
  );
}
