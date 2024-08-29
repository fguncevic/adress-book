import React from "react";
import { Form, Input, Button, DatePicker } from "antd";

const RegisterForm: React.FC<{
  formValues: {
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
    firstname: string;
    lastname: string;
    dateOfBirth: any;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (date: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
}> = ({ formValues, handleInputChange, handleDateChange, handleSubmit }) => {
  return (
    <Form name="register" onFinish={handleSubmit} layout="vertical">
      <Form.Item
        label="Email"
        rules={[
          {
            required: true,
            message: "Please enter your email!",
            type: "email",
          },
        ]}
      >
        <Input
          value={formValues.email}
          name="email"
          onChange={handleInputChange}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        rules={[
          {
            required: true,
            message: "Please enter your password!",
          },
        ]}
      >
        <Input.Password
          value={formValues.password}
          name="password"
          onChange={handleInputChange}
        />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        key="confirmPassword"
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
        ]}
      >
        <Input.Password
          value={formValues.confirmPassword}
          name="confirmPassword"
          onChange={handleInputChange}
        />
      </Form.Item>

      <Form.Item
        label="Username"
        rules={[
          {
            required: true,
            message: "Please enter your username!",
          },
        ]}
      >
        <Input
          value={formValues.username}
          name="username"
          onChange={handleInputChange}
        />
      </Form.Item>

      <Form.Item
        label="First Name"
        rules={[
          {
            required: true,
            message: "Please enter your first name!",
          },
        ]}
      >
        <Input
          value={formValues.firstname}
          name="firstname"
          onChange={handleInputChange}
        />
      </Form.Item>

      <Form.Item
        label="Last Name"
        rules={[
          {
            required: true,
            message: "Please enter your last name!",
          },
        ]}
      >
        <Input
          value={formValues.lastname}
          name="lastname"
          onChange={handleInputChange}
        />
      </Form.Item>

      <Form.Item
        label="Date of Birth"
        rules={[
          {
            required: true,
            message: "Please enter your date of birth!",
          },
        ]}
      >
        <DatePicker
          value={formValues.dateOfBirth}
          onChange={handleDateChange}
          format="YYYY-MM-DD"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;