import axios from "axios";
import { notification } from "antd";

const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};

export const ApiFunc = axios.create({ baseURL: "http://localhost:5000" });

ApiFunc.interceptors.request.use((req) => {
  if (localStorage.getItem("journaltoken")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("journaltoken")
    )}`;
  }
  return req;
});

// User Api
export const userRegister = async (body) => {
  try {
    const { data } = await ApiFunc.post(`/journalbit/signup`, body);
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
    const { data } = await ApiFunc.post(`/journalbit/signin`, body);
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

export const userUpdate = async (body) => {
  try {
    const { data }  = await ApiFunc.put(`/journalbit/update-user`, body);
    openNotificationWithIcon("success", "User Update Successful", "");
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Updating User Failed",
        error.response.data.message
      );
    }
  }
};

export const getUser = async (id) => {
  try {
    const { data }  = await ApiFunc.get(`/journalbit/get-user/${id}`);
    return data
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Updating User Failed",
        error.response.data.message
      );
    }
  }
};

export const getAllUser = async () => {
  try {
    const { data }  = await ApiFunc.get(`/journalbit/get-all-user`);
    return data
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Getting All Users Failed",
        error.response.data.message
      );
    }
  }
};

export const getfollowerUser = async (id) => {
  try {
    const { data }  = await ApiFunc.put(`/journalbit/get-follower/${id}`);
    return data
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Following the User Failed",
        error.response.data.message
      );
    }
  }
};

export const getunfollowerUser = async (id) => {
  try {
    const { data }  = await ApiFunc.put(`/journalbit/get-unfollower/${id}`);
    return data
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Unfollowing the User Failed",
        error.response.data.message
      );
    }
  }
};
