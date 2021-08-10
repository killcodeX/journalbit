import React from "react";
import { TitleWrapper, CardWrapper } from "../UI/Typograpghy/style";
import { LeftNavWrapper } from "./style";
import { AiFillProject, AiFillTags } from "react-icons/ai";
import { topics, tags } from "../../mock-data";

export default function LeftNav() {
  return (
    <LeftNavWrapper>
      <CardWrapper>
        <TitleWrapper>
          <AiFillProject />
          {` `}Topics
        </TitleWrapper>
        {topics.map((topic) => {
          return <p>{topic}</p>;
        })}
      </CardWrapper>

      <CardWrapper className='mt-2'>
        {" "}
        <TitleWrapper>
          <AiFillTags />
          {` `}Tags
        </TitleWrapper>
        {tags.map((tag) => {
          return <p>{tag}</p>;
        })}
      </CardWrapper>
    </LeftNavWrapper>
  );
}
