import React, { useState } from "react";
import { AiOutlineLoading3Quarters, AiOutlinePlus } from "react-icons/ai";
import { Seprator } from "../../../components/UI/Typograpghy/style";
import { CardWrapper } from "../../../components/UI/cards/style";
import { CardTitle, FormLabel } from "./style";
import { Upload } from "antd";
import { beforeUpload } from "../../../helpers/avatarsetting";

export default function ProfileDetails() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const uploadButton = (
    <div>
      {loading ? <AiOutlineLoading3Quarters /> : <AiOutlinePlus />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleChange = (info) => {
    setImageUrl(info.file.name);
    setLoading(false);
  };
  return (
    <CardWrapper>
      <CardTitle>Profile Details</CardTitle>
      <Seprator />
      <div className="py-4 px-2">
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel req={true}>Avatar</FormLabel>
          </div>
          <div className="col-sm-9">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel>Full Name</FormLabel>
          </div>
          <div className="col-sm-9">hi</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel req={true}>Profession</FormLabel>
          </div>
          <div className="col-sm-9">hi</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel req={true} >City</FormLabel>
          </div>
          <div className="col-sm-9">hi</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel req={true} >Bio</FormLabel>
          </div>
          <div className="col-sm-9">hi</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel>Linkedin</FormLabel>
          </div>
          <div className="col-sm-9">hi</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel>Reddit</FormLabel>
          </div>
          <div className="col-sm-9">hi</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel>Github</FormLabel>
          </div>
          <div className="col-sm-9">hi</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel>Facebook</FormLabel>
          </div>
          <div className="col-sm-9">hi</div>
        </div>
        <Seprator />
        <div className="d-flex justify-content-end py-2 px-3">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </CardWrapper>
  );
}
