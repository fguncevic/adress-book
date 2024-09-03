import React from "react";
import { Form, Input, Button, DatePicker, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import Card from "antd/es/card/Card";

const RegisterForm: React.FC<{ handleSubmit: (values: any) => void }> = ({
  handleSubmit,
}) => {
  const navigate = useNavigate();

  const onRedirectToLogin = () => {
    navigate("/login");
  };
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={24} sm={16} md={12} lg={8} xl={12}>
        <Card title="Register">
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
            <Row gutter={16}>
              <Col span={8}>
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
              </Col>

              <Col span={8}>
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
                      message: "First name should have at least 3 letters!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col span={8}>
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
                      message: "Last name should have at least 3 letters!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            {/* Second row with three columns */}
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please enter a valid email!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col span={8}>
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
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </Col>

              <Col span={8}>
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
                        return Promise.reject(
                          new Error("The two passwords do not match!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={8}>
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
                  <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ marginLeft: "8px" }}
                  onClick={onRedirectToLogin}
                >
                  Back
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterForm;
