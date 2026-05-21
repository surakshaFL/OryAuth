import type { ChangeEvent, KeyboardEvent, ReactElement } from "react";
import { useRef, useState } from "react";
import { IconHelp, IconMoon } from "../components/AuthIcons";

type VerifyEmailProps = {
  onBackToLogin?: () => void;
  onContinueToReset?: () => void;
};

const OTP_LENGTH = 6;

export default function VerifyEmail({
  onBackToLogin,
  onContinueToReset,
}: VerifyEmailProps): ReactElement {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const updateDigit = (index: number, value: string) => {
    const nextValue = value.replace(/\D/g, "").slice(-1);
    const nextCode = [...code];
    nextCode[index] = nextValue;
    setCode(nextCode);

    if (nextValue && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    updateDigit(index, event.target.value);
  };

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

      <section className="auth-card detail-card verify-card" aria-label="Email verification form">
        <header className="auth-header detail-header">
          <h1>Verify Your Email</h1>
          <p>Enter the 6-digit code sent to your email.</p>
        </header>

        <form
          className="auth-form verify-form"
          onSubmit={(event) => {
            event.preventDefault();
            onContinueToReset?.();
          }}
        >
          <div className="otp-row" aria-label="Verification code">
            {Array.from({ length: OTP_LENGTH }, (_, index) => (
              <input
                key={index}
                ref={(element) => {
                  inputRefs.current[index] = element;
                }}
                className="otp-input"
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={code[index]}
                onChange={(event) => handleChange(index, event)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                aria-label={`Verification code digit ${index + 1}`}
              />
            ))}
          </div>

          <p className="resend-copy">Resend code in 0:58</p>

          <button className="primary-action submit-btn muted-action" type="submit">
            Verify Code
          </button>
        </form>

        <button
          className="back-link"
          type="button"
          onClick={() => {
            onBackToLogin?.();
          }}
        >
          Back to Sign In
        </button>
      </section>
    </main>
  );
}
