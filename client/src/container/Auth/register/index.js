import React from "react";
import {
  LogoWrapper,
  Title,
  SubTitle,
  AuthFooter,
  AuthPrivacy,
  InfoVector,
  MotoWrapper,
} from "../style";
import { CardWrapper } from "../../../components/UI/cards/style";
import Form from "./form";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="section-auth position-relative">
      <div className="container">
        <div className="row pt-4 pb-5">
          <div className="col-sm-7 d-flex flex-column justify-content-center align-items-center">
            <LogoWrapper>Journal Bit</LogoWrapper>

            <InfoVector
              src={process.env.PUBLIC_URL + "/assets/auth.png"}
              alt="journal"
            />

            <MotoWrapper>
              Journal bit is a place to find different communities and topic to share your Journals,
              articles, or intersting blogs.
            </MotoWrapper>
          </div>
          <div className="col-sm-5">
            <CardWrapper className='shadow-lg'>
              <Title>Create a new account</Title>
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
                  Already have an account? Go to <Link to="/login">Login</Link>
                </span>
              </AuthFooter>
            </CardWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
