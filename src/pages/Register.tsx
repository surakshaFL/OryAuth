import type { ReactElement } from "react";
import { useState } from "react";
import {
  IconEye,
  IconEyeOff,
  IconHelp,
  IconLock,
  IconMail,
  IconMoon,
  IconUser,
} from "../components/AuthIcons";

type RegisterProps = {
  onSwitchToLogin?: () => void;
};

type InputFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  icon: ReactElement;
  trailingIcon?: ReactElement;
  trailingActionLabel?: string;
  onTrailingAction?: () => void;
};

type SocialProvider = "google" | "microsoft";

type SocialMarkProps = {
  provider: SocialProvider;
};

function InputField({
  label,
  type,
  placeholder,
  icon,
  trailingIcon,
  trailingActionLabel,
  onTrailingAction,
}: InputFieldProps): ReactElement {
  return (
    <label className="field">
      <span>{label}</span>
      <div className="input-wrap">
        <span className="field-icon">{icon}</span>
        <input type={type} placeholder={placeholder} />
        {trailingIcon ? (
          <button
            className="trailing-icon"
            type="button"
            aria-label={trailingActionLabel}
            onClick={onTrailingAction}
          >
            {trailingIcon}
          </button>
        ) : null}
      </div>
    </label>
  );
}

function SocialMark({ provider }: SocialMarkProps): ReactElement {
  if (provider === "microsoft") {
    return (
      <span className="social-mark microsoft" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
    );
  }

  return (
    <span className="social-mark google" aria-hidden="true">
      G
    </span>
  );
}

export default function Register({ onSwitchToLogin }: RegisterProps): ReactElement {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="auth-shell register-shell">
      <span className="auth-brand">flflux.</span>

      <div className="theme-actions" aria-hidden="true">
        <button className="theme-icon" type="button" aria-label="Help">
          <IconHelp />
        </button>
        <button className="theme-icon" type="button" aria-label="Theme">
          <IconMoon />
        </button>
      </div>

      <section className="auth-card register-card" aria-label="Create account form">
        <header className="auth-header">
          <h1>Create Account</h1>
          <p>Sign up to get started with your account.</p>
        </header>

        <form className="auth-form">
          <InputField
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            icon={<IconUser />}
          />

          <InputField label="Email" type="email" placeholder="Enter your email" icon={<IconMail />} />

          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            icon={<IconLock />}
            trailingIcon={showPassword ? <IconEyeOff /> : <IconEye />}
            trailingActionLabel={showPassword ? "Hide password" : "Show password"}
            onTrailingAction={() => setShowPassword((value) => !value)}
          />

          <InputField
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            icon={<IconLock />}
            trailingIcon={showConfirmPassword ? <IconEyeOff /> : <IconEye />}
            trailingActionLabel={showConfirmPassword ? "Hide password" : "Show password"}
            onTrailingAction={() => setShowConfirmPassword((value) => !value)}
          />

          <p className="legal-copy">
            I agree to the <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>
          </p>

          <button className="primary-action submit-btn" type="submit">
            Create Account
          </button>
        </form>

        <div className="divider signup-divider">
          <span>Or Sign Up With</span>
        </div>

        <div className="social-row">
          <button className="social-btn" type="button">
            <SocialMark provider="google" />
            Google
          </button>
          <button className="social-btn" type="button">
            <SocialMark provider="microsoft" />
            Microsoft
          </button>
        </div>

        <p className="signup-copy">
          Already have an account?{" "}
          <a
            href="/login"
            onClick={(event) => {
              event.preventDefault();
              onSwitchToLogin?.();
            }}
          >
            Sign In
          </a>
        </p>
      </section>
    </main>
  );
}
