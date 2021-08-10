import React from "react";
import { TitleWrapper } from "../UI/Typograpghy/style";
import { LeftNavWrapper } from "./style";
import { AiFillProject, AiFillTags } from "react-icons/ai";

export default function LeftNav() {
  return (
    <LeftNavWrapper>
      <TitleWrapper><AiFillProject/>{` `}Topics</TitleWrapper>
      <TitleWrapper><AiFillTags/>{` `}Tags</TitleWrapper>
    </LeftNavWrapper>
  );
}
