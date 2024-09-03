import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types";

export const useLogin = (
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
  users: User[]
) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const onLogin = (email: string, password: string): boolean => {
    const hardcodedEmail = "admin@fina.com";
    const hardcodedPassword = "admin";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      setIsAuthenticated(true);
      return true;
    }
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setIsAuthenticated(true);
      return true;
    } else {
      return false;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { email, password } = formValues;

    const loginSuccess = onLogin(email, password);

    if (loginSuccess) {
      navigate("/contact-list");
    } else {
      setError("Invalid email or password");
    }
  };

  return {
    error,
    handleSubmit,
    handleInputChange,
    formValues,
  };
};
