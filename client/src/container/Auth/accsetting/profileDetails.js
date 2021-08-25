import React, { useState } from "react";
import { AiOutlineLoading3Quarters, AiOutlinePlus } from "react-icons/ai";
import { Seprator } from "../../../components/UI/Typograpghy/style";
import { CardWrapper } from "../../../components/UI/cards/style";
import { CardTitle, FormLabel, DiscardBtn } from "./style";
import { Upload } from "antd";
import { beforeUpload } from "../../../helpers/avatarsetting";
import { Form } from "react-bootstrap";
import { ImageUploadAPI } from "../../../api/avatarUpload";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AccountSchema } from "../../../helpers/schema";
import { receiveUpdate } from "../../../redux/actions/useractions";
import { useHistory, Link } from "react-router-dom";

export default function ProfileDetails({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(user.avatar);

  const formik = useFormik({
    initialValues: {
      avatar: imageUrl,
      fname: user.fname,
      lname: user.lname,
      work: user.work,
      city: user.city,
      bio: user.bio,
      linkedin: user.linkedin,
      twitter: user.twitter,
      reddit: user.reddit,
      facebook: user.facebook,
    },
    validationSchema: AccountSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const body = {
        ...values,
        id: user._id,
      };
      dispatch(receiveUpdate(body, history));
    },
  });

  const uploadButton = (
    <div>
      {loading ? <AiOutlineLoading3Quarters /> : <AiOutlinePlus />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleImageUpload = async (info) => {
    const imageUpload = await ImageUploadAPI(info);
    setImageUrl(imageUpload.secure_url);
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
              customRequest={handleImageUpload}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
        </div>
        <Form onSubmit={formik.handleSubmit}>
          <div className="row mb-3">
            <div className="col-sm-3">
              <FormLabel>Full Name</FormLabel>
            </div>
            <div className="col-sm-9">
              <div className="row">
                <div className="col-sm-6">
                  <Form.Group className="mb-3" controlId="fname">
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      value={formik.values.fname}
                      onChange={formik.handleChange}
                      isInvalid={formik.errors.fname}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.fname}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group className="mb-3" controlId="lname">
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      value={formik.values.lname}
                      onChange={formik.handleChange}
                      isInvalid={formik.errors.lname}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.lname}
                    </Form.Control.Feedback>
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
                <Form.Control
                  type="text"
                  placeholder="Enter your work"
                  value={formik.values.work}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.work}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.work}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <FormLabel req={true}>City</FormLabel>
            </div>
            <div className="col-sm-9">
              <Form.Group className="mb-3" controlId="city">
                <Form.Control
                  type="text"
                  placeholder="Enter your city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.city}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.city}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <FormLabel req={true}>Bio</FormLabel>
            </div>
            <div className="col-sm-9">
              <Form.Group className="mb-3" controlId="bio">
                <Form.Control
                  type="text"
                  placeholder="Enter bio"
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.bio}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.bio}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <FormLabel>Linkedin</FormLabel>
            </div>
            <div className="col-sm-9">
              <Form.Group className="mb-3" controlId="linkedin">
                <Form.Control
                  type="text"
                  placeholder="Enter linkedin link"
                  value={formik.values.linkedin}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.linkedin}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.linkedin}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <FormLabel>Twitter</FormLabel>
            </div>
            <div className="col-sm-9">
              <Form.Group className="mb-3" controlId="twitter">
                <Form.Control
                  type="text"
                  placeholder="Enter twitter link"
                  value={formik.values.twitter}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.twitter}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.twitter}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <FormLabel>Reddit</FormLabel>
            </div>
            <div className="col-sm-9">
              <Form.Group className="mb-3" controlId="reddit">
                <Form.Control
                  type="text"
                  placeholder="Enter reddit link"
                  value={formik.values.reddit}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.reddit}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.reddit}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <FormLabel>Facebook</FormLabel>
            </div>
            <div className="col-sm-9">
              <Form.Group className="mb-3" controlId="facebook">
                <Form.Control
                  type="text"
                  placeholder="Enter facebook link"
                  value={formik.values.facebook}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.facebook}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.facebook}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <Seprator />
          <div className="d-flex justify-content-end py-2 px-3">
            <DiscardBtn>
              <Link to="/">Discard</Link>
            </DiscardBtn>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </Form>
      </div>
    </CardWrapper>
  );
}
