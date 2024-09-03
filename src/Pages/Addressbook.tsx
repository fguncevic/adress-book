import React from "react";
import {
  Button,
  DatePicker,
  Input,
  message,
  Form,
  Row,
  Col,
  Radio,
} from "antd";
import Card from "antd/es/card/Card";

interface Contact {
  image: string;
  id: number;
  name: string;
  lastName: string;
  city: string;
  postCode: string;
  age?: string;
  gender?: string;
  dob?: any;
  street?: string;
  email?: string;
  phoneNumber?: string;
}

const Addressbook: React.FC<{ onAddContact: (contact: Contact) => void }> = ({
  onAddContact,
}) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        onAddContact(values as Contact);
        message.success("Contact saved successfully!");
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Row justify="center" align="middle">
      <Col span={12}>
        <Card  style={{ minHeight: "100vh" }}>
          <Form
            form={form}
            layout="vertical"
            style={{ maxWidth: 800, margin: "0 auto" }}
          >
            <Row justify="center" align="middle" gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name!" },
                    {
                      min: 3,
                      message: "First name should have atleast 3 letters!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please enter your last name!" },
                    {
                      min: 4,
                      message: "Last name should have atleast 4 letters!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Age"
                  name="age"
                  rules={[
                    { required: true, message: "Please enter your age!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Gender" name="gender">
                  <Radio.Group>
                    <Radio value="Male">Male</Radio>
                    <Radio value="Female">Female</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Date of Birth"
                  name="dob"
                  rules={[
                    {
                      required: true,
                      message: "Please choose your date of birth!",
                    },
                  ]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="City"
                  name="city"
                  rules={[
                    { required: true, message: "Please enter your city!" },
                    { min: 3, message: "City should have atleast 3 letters!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Street" name="street">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Post Code"
                  name="postCode"
                  rules={[
                    { min: 5, message: "Post Code should have 5 numbers!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
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
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number!",
                    },
                    {
                      min: 7,
                      message: "Phone number should have atleast 7 numbers!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24} style={{ textAlign: "right" }}>
                <Button
                  type="primary"
                  onClick={handleSave}
                  style={{ marginRight: 8 }}
                >
                  Save
                </Button>
                <Button type="default">Close</Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Addressbook;
