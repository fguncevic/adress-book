import { useState } from "react";
import { INITIAL_STATE_CONTACTS } from "../constants";
import { Contact } from "../types";

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>(INITIAL_STATE_CONTACTS);
  
  const handleAddContact = (contact: Contact) => {
    setContacts([
      ...contacts,
      {
        ...contact,
        id: contacts.length + 1,
        image: "https://www.svgrepo.com/show/105517/user-icon.svg",
      },
    ]);
  };

  const handleEditContact = (updatedContact: Contact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  const handleDeleteContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return {
    contacts,
    handleAddContact,
    handleEditContact,
    handleDeleteContact,
  };
};
