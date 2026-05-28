import type { FlowError, GenericError } from "@ory/client";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconHelp, IconMoon } from "../components/AuthIcons";
import ory from "../utils/ory";

function isGenericError(error: FlowError["error"]): error is GenericError {
  return typeof error === "object" && error !== null && "message" in error;
}

export default function ErrorPage(): ReactElement {
  const navigate = useNavigate();
  const [flowError, setFlowError] = useState<FlowError | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const errorId = new URLSearchParams(window.location.search).get("id");

  useEffect(() => {
    let active = true;

    if (!errorId) {
      setLoadError("The error page opened without an Ory error id.");
      return () => {
        active = false;
      };
    }

    ory
      .getFlowError({ id: errorId })
      .then(({ data }) => {
        if (active) {
          setFlowError(data);
          setLoadError(null);
        }
      })
      .catch((error: unknown) => {
        console.error("Unable to load Ory flow error", error);
        if (active) {
          setLoadError("Unable to load the Ory error details. Please start the flow again.");
        }
      });

    return () => {
      active = false;
    };
  }, [errorId]);

  const genericError = isGenericError(flowError?.error) ? flowError.error : null;

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

      <section className="auth-card detail-card" aria-label="Authentication error">
        <header className="auth-header detail-header">
          <h1>Sign-in Error</h1>
          <p>
            {genericError?.reason ??
              loadError ??
              "We could not finish the authentication flow."}
          </p>
        </header>

        {genericError?.message ? <p>{genericError.message}</p> : null}
        {genericError?.id ? <p>Error code: {genericError.id}</p> : null}

        <button className="primary-action submit-btn" type="button" onClick={() => navigate("/login")}>
          Back to Sign In
        </button>
      </section>
    </main>
  );
}
