import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Addressbook from "./Pages/Addressbook";
import ContactList from "./Pages/ContactList";
import { Navbar } from "./components/Navbar";
import './App.css';

interface Contact {
  image: string;
  name: string;
  lastName: string;
  city: string;
  postCode: string;
  age?: string;
  gender?: string;
  dob?: any; // 
  street?: string;
  email?: string;
  phoneNumber?: string;
}

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
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
    }
    ]);

  const handleAddContact = (contact: Contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/addressbook" Component={() => <Addressbook onAddContact={handleAddContact} />} />
        <Route path="/contact-list" Component={() => <ContactList contacts={contacts} />} />
        <Route path="/signout" Component={() => <div>Sign Out Page</div>} />
        <Route path="/" Component={Login} />
      </Routes>
    </Router>
  );
};

export default App;