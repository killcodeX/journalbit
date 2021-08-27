import React, { useEffect } from "react";
import { TitleWrapper } from "../UI/Typograpghy/style";
import { CardHeader, CardWrapper } from "../UI/cards/style";
import { LeftNavWrapper, SelectTopic } from "./style";
import { AiFillProject } from "react-icons/ai";
import { topics } from "../../mock-data";
import { getJournalUsers } from "../../redux/actions/useractions";
import { useDispatch, useSelector } from "react-redux";

export default function LeftNav() {
  const dispatch = useDispatch()
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

      {/* <CardWrapper className="mt-2">
        <CardHeader>
          <TitleWrapper>
            <AiFillTags />
            {` `}Tags
          </TitleWrapper>
        </CardHeader>

        {tags.map((tag) => {
          return <p>{tag}</p>;
        })}
      </CardWrapper> */}
    </LeftNavWrapper>
  );
}
