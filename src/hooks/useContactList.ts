import { useState } from "react";
import { Modal, Form } from "antd";
import moment from "moment";
import { Contact } from "../types";

export const useContactList = (
  onEditContact: (contact: Contact) => void,
  onDeleteContact: (id: number) => void
) => {
  const [expandedContact, setExpandedContact] = useState<number | null>(null);
  const [editForm] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditingContact, setCurrentEditingContact] =
    useState<Contact | null>(null);

  const handleExpand = (id: number) => {
    setExpandedContact(expandedContact === id ? null : id);
  };

  const handleEdit = (contact: Contact) => {
    setCurrentEditingContact(contact);
    setIsEditing(true);
    editForm.setFieldsValue({
      ...contact,
      dob: contact.dob ? moment(contact.dob) : null,
    });
  };

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Are you sure?",
      content: "Do you really want to delete this contact?",
      okText: "Yes",
      cancelText: "No",
      onOk: () => {
        onDeleteContact(id);
      },
    });
  };

  const handleSaveEdit = () => {
    editForm
      .validateFields()
      .then((values) => {
        const updatedContact: Contact = {
          ...currentEditingContact!,
          ...values,
          dob: values.dob ? values.dob.format("YYYY-MM-DD") : null,
        };
        onEditContact(updatedContact);
        setIsEditing(false);
        setCurrentEditingContact(null);
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  return {
    handleEdit,
    handleExpand,
    isEditing,
    handleSaveEdit,
    handleDelete,
    expandedContact,
    setIsEditing,
    setCurrentEditingContact,
    editForm,
  };
};
