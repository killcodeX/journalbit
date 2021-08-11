import React from "react";
import { TitleWrapper } from "../UI/Typograpghy/style";
import { CardHeader, CardWrapper } from "../UI/cards/style";
import { LeftNavWrapper } from "./style";
import { AiFillProject, AiFillTags } from "react-icons/ai";
import { topics, tags } from "../../mock-data";

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
          return <p>{topic}</p>;
        })}
      </CardWrapper>

      <CardWrapper className="mt-2">
        <CardHeader>
          <TitleWrapper>
            <AiFillTags />
            {` `}Tags
          </TitleWrapper>
        </CardHeader>

        {tags.map((tag) => {
          return <p>{tag}</p>;
        })}
      </CardWrapper>
    </LeftNavWrapper>
  );
}
