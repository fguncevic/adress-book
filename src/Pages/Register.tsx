import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/register/RegisterForm";
import { RegisterProps, User } from "../types";

const Register: React.FC<RegisterProps> = ({ users, setUsers }) => {
  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    const {
      email,
      password,
      confirmPassword,
      username,
      firstname,
      lastname,
      dateOfBirth,
    } = values;

    const onRegister = (newUser: User) => {
      setUsers([...users, newUser]);
    };

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    onRegister({
      email,
      password,
      username,
      firstname,
      lastname,
      dateOfBirth,
    });
    alert("Registration successful! You can now log in.");
    navigate("/login");
  };

  return (
    <div>
      <RegisterForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Register;
