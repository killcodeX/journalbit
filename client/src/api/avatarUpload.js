import axios from "axios";

export const ImageUploadAPI = async (req) => {

  console.log('file -->',req)
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
    return data
    } catch (error) {
    console.log(error)
  }
}