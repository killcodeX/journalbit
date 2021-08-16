import React, { useState } from "react";
import { AiOutlineLoading3Quarters, AiOutlinePlus } from "react-icons/ai";
import { Seprator } from "../../../components/UI/Typograpghy/style";
import { CardWrapper } from "../../../components/UI/cards/style";
import { CardTitle, FormLabel } from "./style";
import { Upload } from "antd";
import { beforeUpload } from "../../../helpers/avatarsetting";
import { Form } from "react-bootstrap";

export default function ProfileDetails() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    `${process.env.PUBLIC_URL}/assets/profileImage.jpg`
  );

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
          <div className="col-sm-9">
            <div className="row">
              <div className="col-sm-6">
                <Form.Group className="mb-3" controlId="fname">
                  <Form.Control type="text" placeholder="Enter first name" />
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group className="mb-3" controlId="lname">
                  <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel req={true}>Work</FormLabel>
          </div>
          <div className="col-sm-9">
            <Form.Group className="mb-3" controlId="work">
              <Form.Control type="text" placeholder="Enter your work" />
            </Form.Group>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel req={true}>City</FormLabel>
          </div>
          <div className="col-sm-9">
            <Form.Group className="mb-3" controlId="city">
              <Form.Control type="text" placeholder="Enter your city" />
            </Form.Group>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel req={true}>Bio</FormLabel>
          </div>
          <div className="col-sm-9">
            <Form.Group className="mb-3" controlId="bio">
              <Form.Control type="text" placeholder="Enter bio" />
            </Form.Group>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel>Linkedin</FormLabel>
          </div>
          <div className="col-sm-9">
            <Form.Group className="mb-3" controlId="linkedin">
              <Form.Control type="text" placeholder="Enter linkedin link" />
            </Form.Group>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel>Reddit</FormLabel>
          </div>
          <div className="col-sm-9">
            <Form.Group className="mb-3" controlId="reddit">
              <Form.Control type="text" placeholder="Enter reddit link" />
            </Form.Group>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel>Github</FormLabel>
          </div>
          <div className="col-sm-9">
            <Form.Group className="mb-3" controlId="github">
              <Form.Control type="text" placeholder="Enter github link" />
            </Form.Group>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <FormLabel>Facebook</FormLabel>
          </div>
          <div className="col-sm-9">
            <Form.Group className="mb-3" controlId="facebook">
              <Form.Control type="text" placeholder="Enter facebook link" />
            </Form.Group>
          </div>
        </div>
        <Seprator />
        <div className="d-flex justify-content-end py-2 px-3">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </CardWrapper>
  );
}
