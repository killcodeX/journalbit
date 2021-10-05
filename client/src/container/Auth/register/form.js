import React, { useState } from "react";
import { FormWrapper, FormButton } from "../style";
import { Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import { RegistrationSchema } from "../../../helpers/schema";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { receiveSignUp } from "../../../redux/actions/useractions";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [load, setLoad] = useState(false);

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
    },
    validationSchema: RegistrationSchema,
    onSubmit: (values) => {
      setLoad(true);
      dispatch(receiveSignUp(values, history));
      setTimeout(() => {
        setLoad(false);
      }, 4000);
    },
  });

  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <div className="row mb-3">
          <div className="col-sm-6">
            <Form.Group controlId="fname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
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
            <Form.Group controlId="lname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
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
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            isInvalid={formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            isInvalid={formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        {load ? (
          <div className="pt-3 d-flex flex-column justify-content-center align-items-center">
            <Spinner animation="border" role="status" variant="primary">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <FormButton type="submit">Register</FormButton>
        )}
      </Form>
    </FormWrapper>
  );
}
