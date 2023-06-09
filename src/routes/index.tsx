import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
