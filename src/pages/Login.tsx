import type { LoginFlow } from "@ory/client";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import {
  IconBell,
  IconEye,
  IconEyeOff,
  IconLock,
  IconMail,
  IconMoon,
  IconPasskey,
} from "../components/AuthIcons";
import ory from "../lib/ory";

type LoginProps = {
  onSwitchToRegister?: () => void;
  onSwitchToForgotPassword?: () => void;
};

type DividerProps = {
  text: string;
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

function Divider({ text }: DividerProps): ReactElement {
  return (
    <div className="divider">
      <span>{text}</span>
    </div>
  );
}

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
            // aria-label={trailingActionLabel}
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

export default function Login({ onSwitchToRegister, onSwitchToForgotPassword }: LoginProps) {
  const [flow, setFlow] = useState<LoginFlow | null>(null);
  const [flowError, setFlowError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    let active = true;

    ory
      .createBrowserLoginFlow()
      .then(({ data }) => {
        if (active) {
          setFlow(data);
        }
      })
      .catch((err: unknown) => {
        console.error("Unable to create login flow", err);
        if (active) {
          setFlowError("Unable to start the login flow. Check that Ory is running.");
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="auth-shell">
            <span className="auth-brand">flflux.</span>
      <div className="theme-actions" aria-hidden="true">
        <button className="theme-icon" type="button" aria-label="Notifications">
          <IconBell />
        </button>
        <button className="theme-icon" type="button" aria-label="Theme">
          <IconMoon />
        </button>
      </div>

      <section className="auth-card" aria-label="Sign in form">
        <header className="auth-header">
          <h1>Sign In</h1>
          <p>Welcome back! Please enter your details.</p>
          {flow?.id ? <p>Flow ID: {flow.id}</p> : null}
          {flowError ? <p>{flowError}</p> : null}
        </header>

        <button className="primary-action" type="button">
          <span className="btn-icon">
            <IconPasskey />
          </span>
          Sign in with Passkey
        </button>

        <Divider text="OR CONTINUE WITH EMAIL" />

        <form className="auth-form">
          <InputField label="Email" type="email" placeholder="Enter your email" icon={<IconMail />} />

          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            icon={<IconLock />}
            trailingIcon={showPassword ? <IconEyeOff /> : <IconEye />}
            // trailingActionLabel={showPassword ? "Hide password" : "Show password"}
            onTrailingAction={() => setShowPassword((value) => !value)}
          />

          <div className="form-meta">
            <label className="checkbox">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a
              href="/forgot-password"
              onClick={(event) => {
                event.preventDefault();
                onSwitchToForgotPassword?.();
              }}
            >
              Forgot password?
            </a>
          </div>

          <button className="primary-action submit-btn" type="submit">
            Sign In
          </button>
        </form>

        <Divider text="Or Login With" />

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
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            onClick={(event) => {
              event.preventDefault();
              onSwitchToRegister?.();
            }}
          >
            Sign Up
          </a>
        </p>
      </section>
    </main>
  );
}
