export function Github({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        d="M9 19c-4.3 1.3-4.3-2.1-6-2.6m12 5v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.8a5.3 5.3 0 0 0-1.5-3.7 4.9 4.9 0 0 0-.1-3.6S17.5.4 14.8 2a12.8 12.8 0 0 0-6.6 0C5.5.4 4.4.7 4.4.7a4.9 4.9 0 0 0-.1 3.6A5.3 5.3 0 0 0 2.8 8c0 5.3 3.1 6.5 6.1 6.8a3.4 3.4 0 0 0-.9 2.7v3.9"
        transform="translate(1 1) scale(.91)"
      />
    </svg>
  );
}
export function Linkedin({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10v7M11.5 17v-7m0 3a3 3 0 0 1 6 0v4" />
      <circle cx="7.5" cy="7" r=".6" fill="currentColor" />
    </svg>
  );
}
