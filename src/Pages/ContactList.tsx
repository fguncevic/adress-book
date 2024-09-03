import React from "react";
import { Col, Row, Button, Modal, Input, Form, DatePicker, Radio } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import moment from "moment";
import Card from "antd/es/card/Card";
import { useContactList } from "../hooks/useContactList";
import { ContactListProps } from "../types";

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  onEditContact,
  onDeleteContact,
}) => {
  const {
    handleEdit,
    handleExpand,
    isEditing,
    handleSaveEdit,
    handleDelete,
    expandedContact,
    setIsEditing,
    setCurrentEditingContact,
    editForm,
  } = useContactList(onEditContact, onDeleteContact);
  return (
    <>
      <Row justify="center" align="middle" gutter={[16, 16]}>
        {contacts.map((contact) => (
          <Col key={contact.id} xs={13}>
            <Card style={{ marginBottom: 16 }}>
              <Row gutter={16} align="middle">
                <Col xs={6} sm={4} md={3}>
                  <img
                    src={contact.image}
                    alt={`${contact.name} ${contact.lastName}`}
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col xs={18} sm={16} md={18}>
                  <h3>
                    {contact.name} {contact.lastName}
                  </h3>
                  <p>
                    {contact.city}, {contact.postCode}
                  </p>
                  {expandedContact === contact.id && (
                    <div>
                      <p>Age: {contact.age}</p>
                      <p>Gender: {contact.gender}</p>
                      <p>
                        DOB:
                        {contact.dob
                          ? moment(contact.dob).format("YYYY-MM-DD")
                          : "N/A"}
                      </p>
                      <p>Street: {contact.street}</p>
                      <p>Email: {contact.email}</p>
                      <p>Phone: {contact.phoneNumber}</p>
                    </div>
                  )}
                </Col>

                <Col xs={24} sm={4} md={3}>
                  <Button type="link" onClick={() => handleExpand(contact.id)}>
                    {expandedContact === contact.id ? (
                      <UpOutlined />
                    ) : (
                      <DownOutlined />
                    )}
                    {expandedContact === contact.id ? "Collapse" : "Expand"}
                  </Button>
                </Col>
                <Col>
                  <Button onClick={() => handleEdit(contact)}>Edit</Button>
                </Col>
                <Col>
                  <Button danger onClick={() => handleDelete(contact.id)}>
                    Delete
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title="Edit Contact"
        visible={isEditing}
        onOk={handleSaveEdit}
        onCancel={() => {
          setIsEditing(false);
          setCurrentEditingContact(null);
        }}
      >
        <Form form={editForm} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: "Please enter your last name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Age" name="age">
            <Input />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Radio.Group>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Date of Birth" name="dob">
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "Please enter your city!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Street" name="street">
            <Input />
          </Form.Item>
          <Form.Item label="Post Code" name="postCode">
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ContactList;
