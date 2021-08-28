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
import { getJournalUsers } from "../../redux/actions/useractions";
import { useDispatch, useSelector } from "react-redux";

export default function LeftNav() {
  const [positionY, setPositionY] = useState(0);
  const dispatch = useDispatch();
  const loggedUsers = useSelector((state) => state.auth.user);
  const allUsers = useSelector((state) => state.auth.allUser);
  useEffect(() => {
    dispatch(getJournalUsers());
    window.addEventListener("scroll", () => setPositionY(window.scrollY));
  }, []);

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
            return <SelectTopic key={topic.id}>{topic.name}</SelectTopic>;
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
                          {user.fname + " " + user.lname}
                        </ProfileName>
                        {user.followers.includes(loggedUsers._id) ? (
                          <FollowButton>UnFollow</FollowButton>
                        ) : (
                          <FollowButton>Follow</FollowButton>
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
