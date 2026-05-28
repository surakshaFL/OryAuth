import type { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ErrorPage from "./pages/ErrorPage";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import ResetSuccess from "./pages/ResetSuccess";
import VerifyEmail from "./pages/VerifyEmail";

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/reset-success" element={<ResetSuccess />} />
      <Route path="*" element={<Navigate to="/register" replace />} />
    </Routes>
  );
}

export default App;
