import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import Card from "antd/es/card/Card";

export const LoginForm: React.FC<{
  formValues: { email: string; password: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}> = ({ formValues, handleInputChange, handleSubmit }) => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col span={8}>
        <Card title="Login">
          <Form name="login" onFinish={handleSubmit} layout="vertical">
            <Form.Item
              label="Email"
              name="email"
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
              name="password"
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

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </Card>
      </Col>
    </Row>
  );
};
