import React, { useState } from "react";
import { FormWrapper, FormButton } from "../style";
import { Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { LoginSchema } from "../../../helpers/schema";
import { useDispatch } from "react-redux";
import { receiveLogin } from "../../../redux/actions/useractions";

export default function Loginform() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [load, setLoad] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      setLoad(true);
      dispatch(receiveLogin(values, history));
      setTimeout(() => {
        setLoad(false);
      }, 4000);
    },
  });

  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
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
          <FormButton type="submit">Login</FormButton>
        )}
      </Form>
    </FormWrapper>
  );
}
