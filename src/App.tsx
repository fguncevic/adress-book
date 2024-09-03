import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Addressbook from "./Pages/Addressbook";
import ContactList from "./Pages/ContactList";
import { User } from "./types";
import { Layout } from "./layout/Layout";
import { useContacts } from "./hooks/useContacts";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { contacts, handleAddContact, handleEditContact, handleDeleteContact } =
    useContacts();

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <Login users={users} setIsAuthenticated={setIsAuthenticated} />
          }
        />
        <Route
          path="/register"
          element={<Register users={users} setUsers={setUsers} />}
        />
        <Route
          path="/addressbook"
          element={
            isAuthenticated ? (
              <Layout
                setIsAuthenticated={setIsAuthenticated}
                isAuthenticated={isAuthenticated}
              >
                <Addressbook onAddContact={handleAddContact} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/contact-list"
          element={
            isAuthenticated ? (
              <Layout
                setIsAuthenticated={setIsAuthenticated}
                isAuthenticated={isAuthenticated}
              >
                <ContactList
                  contacts={contacts}
                  onEditContact={handleEditContact}
                  onDeleteContact={handleDeleteContact}
                />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/signout" element={<div>Sign Out Page</div>} />
        <Route path="*" element={<Navigate to="/login" />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
