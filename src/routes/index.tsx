import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { Home } from "../pages/Home";
import { UserAdvertiser } from "../pages/UserAdvertiser";
import { PublicUserAdvertiser } from "../pages/PublicUserAdvertiser";
import { ProductPage } from "../pages/Product";
import { SendEmailResetPassword } from "../pages/ResetPassword";
import { ResetPassword } from "../pages/ResetPassword/token";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/announcement" element={<ProductPage />} />
      <Route path="/userAdvertiserPublic" element={<PublicUserAdvertiser />} />
      <Route path="/userAdvertiser" element={<UserAdvertiser />} />
      <Route path="/resetPassword" element={<SendEmailResetPassword />} />
      <Route path="/resetPassword/:token" element={<ResetPassword />} />
    </Routes>
  );
};
