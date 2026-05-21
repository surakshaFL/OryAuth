import type { ReactElement } from "react";
import { useState } from "react";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import ResetSuccess from "./pages/ResetSuccess";
import VerifyEmail from "./pages/VerifyEmail";

type AuthScreen =
  | "login"
  | "register"
  | "forgot-password"
  | "verify-email"
  | "reset-password"
  | "reset-success";

function App(): ReactElement {
  const [screen, setScreen] = useState<AuthScreen>("register");

  if (screen === "register") {
    return <Register onSwitchToLogin={() => setScreen("login")} />;
  }

  if (screen === "forgot-password") {
    return (
      <ForgotPassword
        onBackToLogin={() => setScreen("login")}
        onContinueToVerify={() => setScreen("verify-email")}
      />
    );
  }

  if (screen === "verify-email") {
    return (
      <VerifyEmail
        onBackToLogin={() => setScreen("login")}
        onContinueToReset={() => setScreen("reset-password")}
      />
    );
  }

  if (screen === "reset-password") {
    return <ResetPassword onResetComplete={() => setScreen("reset-success")} />;
  }

  if (screen === "reset-success") {
    return <ResetSuccess onBackToLogin={() => setScreen("login")} />;
  }

  return (
    <Login
      onSwitchToRegister={() => setScreen("register")}
      onSwitchToForgotPassword={() => setScreen("forgot-password")}
    />
  );
}

export default App;
