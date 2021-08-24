import axios from "axios";
import { message } from "antd";

export const ImageUploadAPI = async (req) => {
  var FormData = require("form-data");
  var data = new FormData();
  data.append("file", req.file)
  data.append("upload_preset", "journaldefault")
  data.append("cloud_name", "cnq")

  var config = {
    method: "post",
    url: "https://api.cloudinary.com/v1_1/journalbit/image/upload",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  try {
    const { data } =  await axios(config)
    message.success('Avatar Uploaded Successfully');
    return data
    } catch (error) {
    console.log(error)
    message.error('Avatar uploading failed');
  }
}