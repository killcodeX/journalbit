import { ApiFunc } from "./index";
import { notification } from "antd";

const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};

// Post Apis
export const newPostPublish = async (body) => {
  try {
    const { data } = await ApiFunc.post(`/journalbit/new-post`, body);
    openNotificationWithIcon(
      "success",
      "Publish Successful",
      "Post published successfully"
    );
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Publish Failed",
        error.response.data.message
      );
    }
  }
};

export const allPost = async () => {
  try {
    const { data } = await ApiFunc.get(`/journalbit/allpost`);
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Post Fetching Failed",
        error.response.data.message
      );
    }
  }
};

export const onlyUserPost = async () => {
  try {
    const { data } = await ApiFunc.get(`/journalbit/mypost`);
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Post Fetching Failed",
        error.response.data.message
      );
    }
  }
};

export const likePost = async (id) => {
  try {
    const { data } = await ApiFunc.put(`/journalbit/likepost`, { postId: id });
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Post like failed",
        error.response.data.message
      );
    }
  }
};

export const unlikePost = async (id) => {
  try {
    const { data } = await ApiFunc.put(`/journalbit/unlikepost`, { postId: id });
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Post unlike failed",
        error.response.data.message
      );
    }
  }
};
