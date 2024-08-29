import React, { useState } from 'react';
import LoginForm from '../components/login/LoginForm';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { email, password } = formValues;
    console.log('Login sent', { email, password });
  };

  return (
    <div>
    <h2>Login</h2>
    <LoginForm
      formValues={formValues}         
      handleInputChange={handleInputChange}  
      handleSubmit={handleSubmit}      
    />
     <p>Don't have an account? <Link to="/register">Register here</Link></p>
  </div>
  );
};

export default Login;