import React, { useState } from 'react';
import { Card, Col, Row, Button, Modal, Input, Form, DatePicker } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import moment from 'moment';

interface Contact {
  id: number;
  image: string;
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

interface ContactListProps {
  contacts: Contact[];
  onEditContact: (contact: Contact) => void;
  onDeleteContact: (id: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onEditContact, onDeleteContact }) => {
  const [expandedContact, setExpandedContact] = useState<number | null>(null);
  const [editForm] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditingContact, setCurrentEditingContact] = useState<Contact | null>(null);

  const handleExpand = (id: number) => {
    setExpandedContact(expandedContact === id ? null : id);
  };

  const handleEdit = (contact: Contact) => {
    setCurrentEditingContact(contact);
    setIsEditing(true);
    editForm.setFieldsValue({
      ...contact,
      dob: contact.dob ? moment(contact.dob) : null
    });
  };

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: 'Are you sure?',
      content: 'Do you really want to delete this contact?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => onDeleteContact(id),
    });
  };

  const handleSaveEdit = () => {
    editForm.validateFields()
      .then(values => {
        const updatedContact = {
          ...currentEditingContact!,
          ...values,
          dob: values.dob ? values.dob.format('YYYY-MM-DD') : null
        };
        onEditContact(updatedContact);
        setIsEditing(false);
      })
      .catch(info => {
        console.log('Validation Failed:', info);
      });
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        {contacts.map((contact) => (
          <Col key={contact.id} xs={24}>
            <Card style={{ marginBottom: 16 }}>
              <Row gutter={16} align="middle">
                <Col xs={6} sm={4} md={3}>
                  <img src={contact.image} alt={`${contact.name} ${contact.lastName}`} style={{ width: "100%" }} />
                </Col>
                <Col xs={18} sm={16} md={18}>
                  <h3>{contact.name} {contact.lastName}</h3>
                  <p>{contact.city}, {contact.postCode}</p>
                  {expandedContact === contact.id && (
                    <div>
                      <p>Age: {contact.age}</p>
                      <p>Gender: {contact.gender}</p>
                      <p>DOB: {contact.dob ? moment(contact.dob).format('YYYY-MM-DD') : "N/A"}</p>
                      <p>Street: {contact.street}</p>
                      <p>Email: {contact.email}</p>
                      <p>Phone: {contact.phoneNumber}</p>
                    </div>
                  )}
                </Col>
                <Col xs={24} sm={4} md={3} style={{ textAlign: "right" }}>
                  <Button type="link" onClick={() => handleExpand(contact.id)}>
                    {expandedContact === contact.id ? <UpOutlined /> : <DownOutlined />} {expandedContact === contact.id ? "Collapse" : "Expand"}
                  </Button>
                  <Button onClick={() => handleEdit(contact)}>Edit</Button>
                  <Button danger onClick={() => handleDelete(contact.id)}>Delete</Button>
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
        onCancel={() => setIsEditing(false)}
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
            rules={[{ required: true, message: "Please enter your last name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Date of Birth"
            name="dob"
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "Please enter your city!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Street"
            name="street"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Post Code"
            name="postCode"
          >
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
            rules={[{ required: true, message: "Please enter your phone number!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ContactList;