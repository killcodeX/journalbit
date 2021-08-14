import axios from "axios";

const baseUrl = "http://localhost:5000/journalbit";


// User Api
export const userRegister = async (body) => {
  console.log('received in api -->',body)
  try {
    const data = axios.post(`${baseUrl}/create-user`, body);
    return data
  } catch (error) {
    console.log(error);
  }
};
