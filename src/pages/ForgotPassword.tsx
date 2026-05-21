import type { ReactElement } from "react";
import { IconHelp, IconMail, IconMoon } from "../components/AuthIcons";

type ForgotPasswordProps = {
  onBackToLogin?: () => void;
  onContinueToVerify?: () => void;
};

export default function ForgotPassword({
  onBackToLogin,
  onContinueToVerify,
}: ForgotPasswordProps): ReactElement {
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

      <section className="auth-card detail-card" aria-label="Forgot password form">
        <header className="auth-header detail-header">
          <h1>Forgot Password?</h1>
          <p>Enter your email to receive reset instructions.</p>
        </header>

        <form
          className="auth-form"
          onSubmit={(event) => {
            event.preventDefault();
            onContinueToVerify?.();
          }}
        >
          <label className="field">
            <span>Email</span>
            <div className="input-wrap">
              <span className="field-icon">
                <IconMail />
              </span>
              <input type="email" placeholder="Enter your email" />
            </div>
          </label>

          <button className="primary-action submit-btn" type="submit">
            Send Reset Link
          </button>
        </form>

        <button
          className="back-link"
          type="button"
          onClick={() => {
            onBackToLogin?.();
          }}
        >
          ← Back to Sign In
        </button>
      </section>
    </main>
  );
}
