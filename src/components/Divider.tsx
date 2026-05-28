import type { ReactElement } from "react";

type DividerProps = {
  text: string;
};

export default function Divider({ text }: DividerProps): ReactElement {
  return (
    <div className="divider">
      <span>{text}</span>
    </div>
  );
}
