import React from "react";
import { CommentWrapper, CommentAvatar, CommentButton } from "./style";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import { CommentSchema } from "../../helpers/schema";

export const CommentBox = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CommentInput = styled(Form.Control)`
  border-color: #f5f8fa;
  color: #5e6278;
  width: 100%;
  height: 35px;
  transition: color 0.2s ease, background-color 0.2s ease;
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

export default function Comment({ userAvatar }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    onSubmit: (values) => {
      console.log(values)
    },
  });

  return (
    <CommentWrapper>
      <CommentAvatar>
        <img src={userAvatar} alt="profile" />
      </CommentAvatar>
      <Form style={{width:'100%'}} onSubmit={formik.handleSubmit}>
        <CommentBox controlId="comment">
          <CommentInput
            type="text"
            placeholder="Add a comment...."
            value={formik.values.comment}
            onChange={formik.handleChange}
            isInvalid={formik.errors.comment}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.comment}
          </Form.Control.Feedback>
        </CommentBox>
        {formik.values.comment.length > 0 ? (
          <CommentButton type="submit">Post</CommentButton>
        ) : null}
      </Form>
    </CommentWrapper>
  );
}
