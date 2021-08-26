import React, { useState } from "react";
import {
  PostCardWrapper,
  PostCardToolBar,
  PostCardProfile,
  ProfileWrapper,
  PostAuthor,
  PostDetail,
  PostTime,
  PostFooter,
} from "./style";
import { Menu, Dropdown } from "antd";
import { Seprator } from "../UI/Typograpghy/style";
import { useDispatch, useSelector } from "react-redux";
import Feed from "./feed";
import Engagement from "./engagement";
import Comment from "./comment";
import {
  AiOutlineEllipsis,
  AiFillDelete,
  AiOutlineSwap,
  AiFillFlag,
} from "react-icons/ai";
import { getdeletePost } from "../../redux/actions/postactions";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  const userId = useSelector((state) => state.auth.user._id);
  const userAvatar = useSelector((state) => state.auth.user.avatar);

  const handleDelete = ({ key }) => {
    if (key == 1) {
      dispatch(getdeletePost(post._id));
    }
  };

  const menu = (
    <Menu onClick={handleDelete}>
      {post.postedBy._id == userId ? (
        <Menu.Item key="1" icon={<AiFillDelete />}>
          Delete
        </Menu.Item>
      ) : null}
      <Menu.Item key="2" icon={<AiFillFlag />}>
        Report Post
      </Menu.Item>
    </Menu>
  );

  return (
    <PostCardWrapper className="mb-3">
      <PostCardToolBar>
        <PostCardProfile>
          <ProfileWrapper>
            <img src={post.postedBy.avatar} alt="profile" />
          </ProfileWrapper>
          <PostDetail>
            <PostAuthor>
              <Link
                style={{ textDecoration: "none", color:'inherit' }}
                to={`/profile/${post.postedBy._id}`}
              >{`${post.postedBy.fname} ${post.postedBy.lname}`}</Link>
            </PostAuthor>
            <PostTime>{post.postedBy.work}</PostTime>
          </PostDetail>
        </PostCardProfile>
        <Dropdown overlay={menu} trigger={["click"]}>
          <AiOutlineEllipsis style={{ fontSize: "25px", cursor: "pointer" }} />
        </Dropdown>
      </PostCardToolBar>
      <Feed post={post} />
      <PostFooter>
        <span>{post.likes.length} likes</span>
        <span className="px-3">
          <AiOutlineSwap />
        </span>
        <span>{post.comments.length} comments</span>
        <Seprator />
        <Engagement
          post={post}
          userId={userId}
          showComments={showComments}
          setShowComments={setShowComments}
        />
        <Seprator />
        <Comment
          userAvatar={userAvatar}
          postId={post._id}
          comments={post.comments}
          showComments={showComments}
          setShowComments={setShowComments}
        />
      </PostFooter>
    </PostCardWrapper>
  );
}
