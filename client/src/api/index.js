import axios from "axios";
import { notification } from "antd";

const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};

const ApiFunc = axios.create({ baseURL: "http://localhost:5000"})

ApiFunc.interceptors.request.use((req) => {
  console.log('token from Api',localStorage.getItem('journaltoken'))
  if(localStorage.getItem('journaltoken')){
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('journaltoken'))}`
  }
  return req
})

// User Api
export const userRegister = async (body) => {
  try {
    const { data } = await axios.post(`/journalbit/signup`, body);
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
