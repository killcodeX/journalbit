import React, { useEffect } from "react";
import { TitleWrapper } from "../UI/Typograpghy/style";
import { CardHeader, CardWrapper } from "../UI/cards/style";
import {
  LeftNavWrapper,
  SelectTopic,
  PeopleWrapper,
  ProfileWrapper,
  Profiles,
} from "./style";
import { AiFillProject, AiOutlineTeam } from "react-icons/ai";
import { topics } from "../../mock-data";
import { getJournalUsers } from "../../redux/actions/useractions";
import { useDispatch, useSelector } from "react-redux";

export default function LeftNav() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.auth.allUser);
  useEffect(() => {
    dispatch(getJournalUsers());
  }, []);

  return (
    <LeftNavWrapper>
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

      <CardWrapper className="mt-2">
        <CardHeader>
          <TitleWrapper>
            <AiOutlineTeam />
            {` `}Peoples
          </TitleWrapper>
        </CardHeader>
        <PeopleWrapper>
          {allUsers?.length > 0
            ? allUsers.map((user) => {
                return (
                  <Profiles key={user._id}>
                    <ProfileWrapper>
                      <img src={user.avatar} alt="profile" />
                    </ProfileWrapper>
                  </Profiles>
                );
              })
            : null}
        </PeopleWrapper>
      </CardWrapper>
    </LeftNavWrapper>
  );
}
