import React from "react";
import { Navbar } from "../components/Navbar";

export const Layout = ({
  isAuthenticated,
  children,
  setIsAuthenticated,
}: {
  isAuthenticated: boolean;
  children: React.ReactNode;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const onLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      {isAuthenticated && <Navbar onLogout={onLogout} />}
      {children}
    </div>
  );
};
