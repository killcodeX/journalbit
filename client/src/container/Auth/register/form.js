import React from "react";
import { FormWrapper, FormButton } from "../style";
import { Form } from "react-bootstrap";

export default function form() {
  return (
    <FormWrapper>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <FormButton type="submit">Register</FormButton>
      </Form>
    </FormWrapper>
  );
}
