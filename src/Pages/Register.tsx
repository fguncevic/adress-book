import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/register/RegisterForm";

interface RegisterProps {
  onRegister: (userData: any) => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const navigate = useNavigate(); 

  const handleSubmit = (values: any) => {
    const { email, password, confirmPassword, username, firstname, lastname, dateOfBirth } = values;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    onRegister({ email, password, username, firstname, lastname, dateOfBirth });
    alert("Registration successful! You can now log in.");
    navigate("/login");
  };

  return (
    <div>
      <h2>Register</h2>
      <RegisterForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Register;