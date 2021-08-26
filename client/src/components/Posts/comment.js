import React from "react";
import {
  CommentWrapper,
  CommentAvatar,
  CommentButton,
  CommentFeed,
  CommentList,
  CommentPost,
  CommentItem,
  CommentAuthor,
  ActuallComment,
} from "./style";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import { getcommentPost } from "../../redux/actions/postactions";
import { Seprator } from "../UI/Typograpghy/style";

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

export default function Comment({
  userAvatar,
  postId,
  comments,
  showComments,
  setShowComments,
}) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    onSubmit: (values, { resetForm }) => {
      const body = {
        text: values.comment,
        postId: postId,
      };
      dispatch(getcommentPost(body));
      resetForm({ values: "" });
      setShowComments(!showComments);
    },
  });

  return (
    <CommentWrapper>
      <CommentFeed>
        <CommentAvatar>
          <img src={userAvatar} alt="profile" />
        </CommentAvatar>
        <Form style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
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
      </CommentFeed>
      {showComments ? (
        <>
          <Seprator />
          <CommentList>
            {comments.map((comment) => {
              return (
                <CommentItem key={comment._id}>
                  <CommentAvatar>
                    <img src={comment.postedBy.avatar} alt="profile" />
                  </CommentAvatar>
                  <CommentPost>
                    <CommentAuthor>
                      <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        to={`/profile/${comment.postedBy._id}`}
                      >
                        {comment.postedBy.fname + " " + comment.postedBy.lname}
                      </Link>
                    </CommentAuthor>
                    <ActuallComment>{comment.text}</ActuallComment>
                  </CommentPost>
                </CommentItem>
              );
            })}
          </CommentList>
        </>
      ) : null}
    </CommentWrapper>
  );
}
