import React from 'react';
import { Form, Input, Button } from 'antd';

const LoginForm: React.FC<{
  formValues: { email: string; password: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}> = ({ formValues, handleInputChange, handleSubmit }) => {
  return (
    <Form name="login" onFinish={handleSubmit} layout="vertical">
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please enter your email!',
            type: 'email',
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
        name="password"
        rules={[
          {
            required: true,
            message: 'Please enter your password!',
          },
        ]}
      >
        <Input.Password
          value={formValues.password}
          name="password"
          onChange={handleInputChange}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;