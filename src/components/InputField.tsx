import type { ChangeEvent, ReactElement } from "react";

type InputFieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  icon: ReactElement;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  trailingIcon?: ReactElement;
  onTrailingAction?: () => void;
};

export default function InputField({
  label,
  name,
  type,
  placeholder,
  icon,
  value,
  onChange,
  trailingIcon,
  onTrailingAction,
}: InputFieldProps): ReactElement {
  return (
    <label className="field">
      <span>{label}</span>
      <div className="input-wrap">
        <span className="field-icon">{icon}</span>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {trailingIcon ? (
          <button className="trailing-icon" type="button" onClick={onTrailingAction}>
            {trailingIcon}
          </button>
        ) : null}
      </div>
    </label>
  );
}
