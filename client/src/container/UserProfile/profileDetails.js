import React from "react";
import Posts from "../../components/Posts";
import { CardWrapper, CardHeader } from "../../components/UI/cards/style";
import { TitleWrapper } from "../../components/UI/Typograpghy/style";
import { links } from "../../mock-data";
import {
  AiFillContainer,
  AiFillEdit,
  AiFillEnvironment,
  AiFillGithub,
  AiFillLinkedin,
  AiFillRedditCircle,
  AiFillFacebook
} from "react-icons/ai";
import { SocialMediaProfiles, UserIntro } from "./style";

export default function ProfileDetails() {
  return (
    <div className="pt-4">
      <div className="row">
        <div className="col-sm-4">
          <CardWrapper>
            <CardHeader>
              <TitleWrapper>
                <AiFillContainer />
                {` `}Intro
              </TitleWrapper>
            </CardHeader>
            <UserIntro>
              <p>
                <strong>
                  <AiFillEdit />{` `}Works in
                </strong>
                {` `}Devcript
              </p>
              <span>
                <strong>
                  <AiFillEnvironment />{` `}Lives in
                </strong>
                {` `}Banagalore
              </span>
              <SocialMediaProfiles>
                <AiFillGithub />
                <AiFillLinkedin/>
                <AiFillRedditCircle/>
                <AiFillFacebook/>
              </SocialMediaProfiles>
            </UserIntro>
          </CardWrapper>
        </div>
        <div className="col-sm-8">
          {links.map((link) => {
            return <Posts link={link} />;
          })}
        </div>
      </div>
    </div>
  );
}
