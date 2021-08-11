import React from "react";
import {
  PostWrapper,
  ProfileWrapper,
  InputWrapper,
  InputIconWrapper,
  InputBar,
  PostDown,
  PostButton,
} from "./style";
import { Seprator } from "../UI/Typograpghy/style";
import { Form } from "react-bootstrap";
import { CardWrapper, CardToolBar } from "../UI/cards/style";
import { AiOutlineThunderbolt } from "react-icons/ai";
import Posts from "./Posts";
import { links } from "../../mock-data";

export default function PostSide() {
  return (
    <PostWrapper>
      <CardWrapper>
        <CardToolBar>
          <ProfileWrapper>
            <img
              src={process.env.PUBLIC_URL + "/assets/profileImage.jpg"}
              alt="profile"
            />
          </ProfileWrapper>
          <InputWrapper>
            <InputIconWrapper>
              <AiOutlineThunderbolt />
            </InputIconWrapper>
            <InputBar type="text" placeholder="Share new journal" />
          </InputWrapper>
        </CardToolBar>
        <Seprator />
        <PostDown>
          <Form.Select className="post-select" aria-label="Select Topic">
            <option>Select Topic</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <PostButton>Post</PostButton>
        </PostDown>
      </CardWrapper>
      {links.map((link) => {
        return <Posts link={link} />;
      })}
    </PostWrapper>
  );
}
