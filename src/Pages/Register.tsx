import React from "react";
import RegisterForm from "../components/register/RegisterForm";

const Register = () => {
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

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    console.log("Registered: ", {
      email,
      password,
      username,
      firstname,
      lastname,
      dateOfBirth,
    });
  };

  return (
    <div>
      <h2>Register</h2>
      <RegisterForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Register;