import type { ReactElement } from "react";

type SocialMarkProps = {
  provider: "google" | "microsoft";
};

export default function SocialMark({
  provider,
}: SocialMarkProps): ReactElement {
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
