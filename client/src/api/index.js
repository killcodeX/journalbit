import axios from "axios";
import { notification } from "antd";

const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};

const baseUrl = "http://localhost:5000/journalbit";

// User Api
export const userRegister = async (body) => {
  try {
    const { data } = await axios.post(`${baseUrl}/signup`, body);
    openNotificationWithIcon("success", "Signup Successful", "");
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Signup Failed",
        error.response.data.message
      );
    }
  }
};

export const userLogin = async (body) => {
  try {
    const { data } = await axios.post(`${baseUrl}/signin`, body);
    openNotificationWithIcon("success", "Login Successful", "");
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Login Failed",
        error.response.data.message
      );
    }
  }
};
