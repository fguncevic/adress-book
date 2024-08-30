import React from "react";
import { Form, Input, Button, DatePicker } from "antd";
import { Link } from "react-router-dom";

const RegisterForm: React.FC<{ handleSubmit: (values: any) => void }> = ({
  handleSubmit,
}) => {
  return (
    <Form
      name="register"
      onFinish={handleSubmit}
      layout="vertical"
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
        firstname: "",
        lastname: "",
        dateOfBirth: null,
      }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please enter your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please enter your password!",
          },
          {
            min: 6,
            message: "Password must be at least 6 characters long!",
          },
          {
            pattern: /(?=.*\d)/,
            message: "Password must contain at least one number!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("Passwords don't match");
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please enter your username!",
          },
          {
            min: 5,
            message: "Username must be at least 5 characters long!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="First Name"
        name="firstname"
        rules={[
          {
            required: true,
            message: "Please enter your first name!",
          },
          {
            min: 3,
            message: "First name should have atleast 3 letters!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastname"
        rules={[
          {
            required: true,
            message: "Please enter your last name!",
          },
          {
            min: 3,
            message: "Last name should have atleast 3 letters!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date of Birth"
        name="dateOfBirth"
        rules={[
          {
            required: true,
            message: "Please select your date of birth!",
          },
        ]}
      >
        <DatePicker format="YYYY-MM-DD" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        <Button>
          <Link to="/login">Back</Link>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
