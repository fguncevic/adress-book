import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import './App.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav>
      {(path === '/login' || path === '/') && (
        <Link to="/register">Register</Link>
      )}
      {path === '/register' && (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/" Component={Login} />
      </Routes>
    </Router>
  );
};

export default App;