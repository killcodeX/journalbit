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

export const getOnlySubPost = async () => {
  try {
    const { data } = await ApiFunc.get(`/journalbit/onlysubpost`);
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

export const getFilterPostApi = async (topic) => {
  try {
    const { data } = await ApiFunc.post(`/journalbit/filter-post`, topic);
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

export const onlyUserPost = async (id) => {
  try {
    const { data } = await ApiFunc.get(`/journalbit/mypost/${id}`);
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
    const { data } = await ApiFunc.put(`/journalbit/unlikepost`, {
      postId: id,
    });
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

export const commentPost = async (body) => {
  try {
    const { data } = await ApiFunc.put(`/journalbit/addcomment`, body);
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Comment on Post failed",
        error.response.data.message
      );
    }
  }
};

export const deletePost = async (id) => {
  try {
    const { data } = await ApiFunc.delete(`/journalbit/deletepost/${id}`);
    openNotificationWithIcon("success", data.result);
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Removing Post failed",
        error.response.data.message
      );
    }
  }
};
