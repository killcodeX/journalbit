import React from "react";
import {
  LogoWrapper,
  Title,
  SubTitle,
  AuthFooter,
  AuthPrivacy,
  InfoWrapper,
  InfoVector,
  MotoWrapper,
} from "../style";
import { CardWrapper } from "../../../components/UI/cards/style";
import Form from "./form";
import { Link } from "react-router-dom";

export default function login() {
  return (
    <div className="section-auth position-relative">
      <div className="container">
        <div className="row pt-5">
          <div className="col-sm-7 d-flex flex-column justify-content-center align-items-center">
            <LogoWrapper>Journal Bit</LogoWrapper>

            <InfoVector
              src={process.env.PUBLIC_URL + "/assets/auth.png"}
              alt="journal"
            />

            <MotoWrapper>
              Journal bit a place to find community and share your journals or
              Ideas to the world
            </MotoWrapper>
          </div>
          <div className="col-sm-5">
            <CardWrapper>
              <Title>Login to your account</Title>
              <SubTitle>
                Join Journal Bit and share your journals, fav blogs or ideas to
                the world
              </SubTitle>
              <Form />
              <AuthFooter>
                <AuthPrivacy>
                  By creating your Journal Bit account, you agree to our{" "}
                  <a href="#">Terms, Data Policy</a> and Cookie Policy.
                </AuthPrivacy>
                <span>
                  Don't have an account? Go to{" "}
                  <Link to="/register">Register</Link>
                </span>
              </AuthFooter>
            </CardWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
