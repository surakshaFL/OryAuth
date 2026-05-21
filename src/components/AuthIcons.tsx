import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function IconBell(props: IconProps): ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 6a6 6 0 0 0-6 6v3.2L4.8 17a1 1 0 0 0 .8 1.6h12.8a1 1 0 0 0 .8-1.6L18 15.2V12a6 6 0 0 0-6-6Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function IconMoon(props: IconProps): ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z" />
    </svg>
  );
}

export function IconPasskey(props: IconProps): ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M8.5 11a3.5 3.5 0 1 1 3.3 4.5H11l-1.5 1.5v1.2H8v1.3H6.3V22H3.8v-2.5L9 14.3A3.5 3.5 0 0 1 8.5 11Z" />
      <path d="M14.8 6.6a2.4 2.4 0 1 1 3.4 3.4" />
      <path d="M17.2 4.2a5.8 5.8 0 1 1 0 8.2" />
    </svg>
  );
}

export function IconMail(props: IconProps): ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m5 8 7 5 7-5" />
    </svg>
  );
}

export function IconLock(props: IconProps): ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="10" width="16" height="10" rx="3" />
      <path d="M8 10V7.8a4 4 0 1 1 8 0V10" />
    </svg>
  );
}

export function IconEye(props: IconProps): ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export function IconEyeOff(props: IconProps): ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M3 3 21 21" />
      <path d="M10.6 5.2A10 10 0 0 1 12 5c6 0 9.5 7 9.5 7a16.8 16.8 0 0 1-3.2 4.1" />
      <path d="M6.5 6.7A16.2 16.2 0 0 0 2.5 12s3.5 7 9.5 7c1.8 0 3.4-.4 4.8-1.1" />
      <path d="M9.9 9.9A3 3 0 0 0 9 12a3 3 0 0 0 4.7 2.5" />
    </svg>
  );
}

export function IconHelp(props: IconProps): ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M9.8 9.5a2.4 2.4 0 1 1 4.2 1.6c-.7.7-1.5 1.1-1.8 2.1" />
      <path d="M12 16.5h.01" />
    </svg>
  );
}

export function IconUser(props: IconProps): ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 12a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

export function IconCheck(props: IconProps): ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="m7 12.5 3.1 3.1L17 8.8" />
    </svg>
  );
}
