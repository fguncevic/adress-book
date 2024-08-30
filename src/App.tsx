import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Addressbook from "./Pages/Addressbook";
import ContactList from "./Pages/ContactList";
import { Navbar } from "./components/Navbar";
import './App.css';

interface User {
  email: string;
  password: string;
  username: string;
  firstname: string;
  lastname: string;
  dateOfBirth: string;
}

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

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "Domagoj",
      lastName: "Guncevic",
      city: "Zenica",
      postCode: "10001",
      age: "30",
      gender: "Male",
      dob: null,
      street: "Zaboravio sam",
      email: "dguncevic@gmail.com",
      phoneNumber: "0958142701",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Filip",
      lastName: "Spanovic",
      city: "Osijek",
      postCode: "31000",
      age: "35",
      gender: "Male",
      dob: null,
      street: "Negdje u tenju",
      email: "fspanovic@gmail.com",
      phoneNumber: "09nanajjacebaticeeee",
    },
  ]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

    const handleLogin = (email: string, password: string): boolean => {
      const hardcodedEmail = "programeri@fina.com";
      const hardcodedPassword = "nanajjace";

      if(email === hardcodedEmail && password === hardcodedPassword){
        setIsAuthenticated(true);
        return true;

      }
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        setIsAuthenticated(true);
        return true;
      } else {
        return false;
      }
    };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleRegister = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  const handleAddContact = (contact: Contact) => {
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
  };

  const handleEditContact = (updatedContact: Contact) => {
    setContacts(contacts.map(contact => (contact.id === updatedContact.id ? updatedContact : contact)));
  };

  const handleDeleteContact = (id: number) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Router>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route
          path="/addressbook"
          element={isAuthenticated ? <Addressbook onAddContact={handleAddContact} /> : <Navigate to="/login" />}
        />
        <Route
          path="/contact-list"
          element={isAuthenticated ? <ContactList contacts={contacts} onEditContact={handleEditContact} onDeleteContact={handleDeleteContact} /> : <Navigate to="/login" />}
        />
        <Route path="/signout" element={<div>Sign Out Page</div>} />
        <Route path="/" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;