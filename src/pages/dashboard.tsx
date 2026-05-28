import type { ReactElement } from "react";
import { useState } from "react";
import { startLogout } from "../utils/auth";

export default function Dashboard(): ReactElement {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [logoutError, setLogoutError] = useState<string | null>(null);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      setLogoutError(null);

      const logoutUrl = await startLogout();
      window.location.assign(logoutUrl);
    } catch (error) {
      console.error("Unable to start logout flow", error);
      setLogoutError("Unable to log out right now. Please try again.");
      setIsLoggingOut(false);
    }
  };

  return (
    <main className="dashboard-shell">
      <section className="dashboard-card" aria-label="Dashboard">
        <div className="dashboard-copy">
          <span className="dashboard-eyebrow">Account</span>
          <h1>Dashboard</h1>
          <p>You are logged in.</p>
          {logoutError ? <p className="dashboard-error">{logoutError}</p> : null}
        </div>

        <button
          className="primary-action dashboard-logout"
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? "Signing out..." : "Logout"}
        </button>
      </section>
    </main>
  );
}
