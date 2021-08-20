import React from "react";
import {
  PostWrapper,
  ProfileWrapper,
  InputIconWrapper,
  PostDown,
  PostButton,
} from "./style";
import { Seprator } from "../../components/UI/Typograpghy/style";
import { Form } from "react-bootstrap";
import { CardWrapper, CardToolBar } from "../../components/UI/cards/style";
import { AiOutlineThunderbolt } from "react-icons/ai";
import Posts from "../../components/Posts";
import { links } from "../../mock-data";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import styled from "styled-components";
import { PostSchema } from "../../helpers/schema";
import { newPostPublish } from "../../api/postapi";
import { topics } from "../../mock-data";

export const InputWrapper = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0.25rem 0;
  width: 80%;
`;

const InputBar = styled(Form.Control)`
  background-color: #f5f8fa;
  border-color: #f5f8fa;
  color: #5e6278;
  width: 100%;
  height: 50px;
  transition: color 0.2s ease, background-color 0.2s ease;
  padding-left: 3.25rem !important;
  padding-top: 0.55rem;
  padding-bottom: 0.55rem;
  font-size: 0.925rem;
  border: 1px solid #e4e6ef;
  appearance: none;
  border-radius: 0.475rem;
  display: block;
  font-weight: 500;
  line-height: 1.5;

  &:focus {
    outline: none;
    border: none;
  }
`;

export default function PostSide() {
  const User = useSelector((state) => state.auth.user);

  const formik = useFormik({
    initialValues: {
      url: "",
      topic: "",
    },
    validationSchema: PostSchema,
    onSubmit: (values) => {
      newPostPublish(values);
    },
  });

  return (
    <PostWrapper>
      <CardWrapper>
        <Form onSubmit={formik.handleSubmit}>
          <CardToolBar>
            <ProfileWrapper>
              <img src={User.avatar} alt="profile" />
            </ProfileWrapper>
            <InputWrapper controlId="url">
              <InputIconWrapper>
                <AiOutlineThunderbolt />
              </InputIconWrapper>
              <InputBar
                type="text"
                placeholder="Enter Journal link"
                value={formik.values.url}
                onChange={formik.handleChange}
                isInvalid={formik.errors.url}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.url}
              </Form.Control.Feedback>
            </InputWrapper>
          </CardToolBar>
          <Seprator />
          <PostDown>
            <Form.Group controlId="topic">
              <Form.Control
                as="select"
                onChange={formik.handleChange}
                isInvalid={formik.errors.topic}
                value="Select Topic ..."
              >
                {topics.map((topic) => {
                  return <option key={topic.id} value={topic.slug}>{topic.name}</option>;
                })}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {formik.errors.topic}
              </Form.Control.Feedback>
            </Form.Group>
            <PostButton type="submit">Post</PostButton>
          </PostDown>
        </Form>
      </CardWrapper>
      <div className="mt-4">
        {links.map((link) => {
          return <Posts link={link} />;
        })}
      </div>
    </PostWrapper>
  );
}
