import React from "react";
import {
  PostWrapper,
  ProfileWrapper,
  InputWrapper,
  InputIconWrapper,
  InputBar,
  SelectWrapper,
  SelectBar
} from "./style";
import { Seprator } from "../UI/Typograpghy/style";
import { CardWrapper, CardToolBar } from "../UI/cards/style";
import { AiOutlineThunderbolt } from "react-icons/ai";

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
            <SelectWrapper>
              <SelectBar placeholder='Select Topic'>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </SelectBar>
            </SelectWrapper>
          </InputWrapper>
        </CardToolBar>
        <Seprator />
      </CardWrapper>
    </PostWrapper>
  );
}
