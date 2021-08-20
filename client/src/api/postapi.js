import { ApiFunc } from './index';
import { notification } from "antd";

const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};

// User Api
export const newPostPublish = async (body) => {
  try {
    const { data } = await ApiFunc.post(`/journalbit//new-post`, body);
    openNotificationWithIcon("success", "Publish Successful", "Post published successfully");
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