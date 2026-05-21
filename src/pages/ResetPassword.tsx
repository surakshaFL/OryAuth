import type { ReactElement } from "react";
import { useState } from "react";
import { IconEye, IconHelp, IconLock, IconMoon ,IconEyeOff} from "../components/AuthIcons";

type ResetPasswordProps = {
  onResetComplete?: () => void;
};

type PasswordFieldProps = {
  label: string;
  placeholder: string;
  visible: boolean;
  onToggleVisibility: () => void;
};

function PasswordField({
  label,
  placeholder,
  visible,
  onToggleVisibility,
}: PasswordFieldProps): ReactElement {
  return (
    <label className="field">
      <span>{label}</span>
      <div className="input-wrap">
        <span className="field-icon">
          <IconLock />
        </span>
        <input type={visible ? "text" : "password"} placeholder={placeholder} />
        <button
          className="trailing-icon"
          type="button"
          aria-label={visible ? "Hide password" : "Show password"}
          onClick={onToggleVisibility}
        >
          {visible ? <IconEyeOff /> : <IconEye />}
        </button>
      </div>
    </label>
  );
}

export default function ResetPassword({ onResetComplete }: ResetPasswordProps): ReactElement {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="auth-shell auth-detail-shell">
      <span className="auth-brand">flflux.</span>

      <div className="theme-actions" aria-hidden="true">
        <button className="theme-icon" type="button" aria-label="Help">
          <IconHelp />
        </button>
        <button className="theme-icon" type="button" aria-label="Theme">
          <IconMoon />
        </button>
      </div>

      <section className="auth-card detail-card reset-card" aria-label="Reset password form">
        <header className="auth-header detail-header">
          <h1>Create New Password</h1>
          <p>Your new password must be different from previous passwords.</p>
        </header>

        <form
          className="auth-form reset-form"
          onSubmit={(event) => {
            event.preventDefault();
            onResetComplete?.();
          }}
        >
          <PasswordField
            label="New Password"
            placeholder="Enter new password"
            visible={showNewPassword}
            onToggleVisibility={() => setShowNewPassword((value) => !value)}
          />

          <PasswordField
            label="Confirm Password"
            placeholder="Confirm new password"
            visible={showConfirmPassword}
            onToggleVisibility={() => setShowConfirmPassword((value) => !value)}
          />

          <button className="primary-action submit-btn" type="submit">
            Reset Password
          </button>
        </form>
      </section>
    </main>
  );
}
