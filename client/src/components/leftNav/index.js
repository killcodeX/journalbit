import React from "react";
import { TitleWrapper } from "../UI/Typograpghy/style";
import { CardHeader, CardWrapper } from "../UI/cards/style";
import { LeftNavWrapper } from "./style";
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

        {topics.map((topic, index) => {
          return <p key={index}>{topic}</p>;
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
