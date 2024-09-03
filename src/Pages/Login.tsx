import React from "react";
import { LoginForm } from "../components/login/LoginForm";
import { User } from "../types";
import { useLogin } from "../hooks/useLogin";

const Login = ({
  setIsAuthenticated,
  users,
}: {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  users: User[];
}) => {
  const { error, handleSubmit, handleInputChange, formValues } = useLogin(
    setIsAuthenticated,
    users
  );
  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <LoginForm
        formValues={formValues}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
