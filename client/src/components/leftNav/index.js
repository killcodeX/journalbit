import React from "react";
import { TitleWrapper } from "../UI/Typograpghy/style";
import { CardHeader, CardWrapper } from "../UI/cards/style";
import { LeftNavWrapper, SelectTopic } from "./style";
import { AiFillProject } from "react-icons/ai";
import { topics } from "../../mock-data";

export default function LeftNav() {
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
