import React from "react";
import { FormWrapper, FormButton } from "../style";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { LoginSchema } from "../../../helpers/schema";
import { useDispatch } from "react-redux";
import { receiveLogin } from "../../../redux/actions/useractions";

export default function Loginform() {
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(receiveLogin(values, history));
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
        <FormButton type="submit">Login</FormButton>
      </Form>
    </FormWrapper>
  );
}
