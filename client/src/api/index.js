import axios from "axios";

const baseUrl = "http://localhost:5000/journalbit";


// User Api
export const userRegister = async (body) => {
  try {
    const data = axios.post(`${baseUrl}/signup`, body);
    return data
  } catch (error) {
    console.log(error);
  }
};
