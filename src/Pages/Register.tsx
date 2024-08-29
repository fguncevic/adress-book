import React, { useState } from "react";
import RegisterForm from "../components/register/RegisterForm";

const Register = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    firstname: "",
    lastname: "",
    dateOfBirth: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const {
      email,
      password,
      confirmPassword,
      username,
      firstname,
      lastname,
      dateOfBirth,
    } = formValues;

    if (password !== confirmPassword) {
      alert("Sifre nisu iste");
      return;
    }

    console.log("Registriran s", {
      email,
      password,
      username,
      firstname,
      lastname,
      dateOfBirth,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: any) => {
    setFormValues({ ...formValues, dateOfBirth: date });
  };

  return (
    <div>
      <h2>Register</h2>
      <RegisterForm
        formValues={formValues}
        handleInputChange={handleInputChange}
        handleDateChange={handleDateChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Register;