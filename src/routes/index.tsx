import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { Home } from "../pages/Home";
import { UserAdvertiser } from "../pages/UserAdvertiser";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/userAdvertiser" element={<UserAdvertiser/>} />
    </Routes>
  );
};
