import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/"  Component={Login} />
      </Routes>
    </Router>
  );
};

export default App;