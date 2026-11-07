import React from 'react';

interface SailMarkProps {
  className?: string;
  size?: number;
}

export const SailMark: React.FC<SailMarkProps> = ({ className = '', size = 26 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Shipcraft sail mark"
    >
      <defs>
        <linearGradient id="sailGradient1" x1="4" y1="2" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFA64D" />
          <stop offset="50%" stopColor="#F0A24C" />
          <stop offset="100%" stopColor="#C4782A" />
        </linearGradient>
        <linearGradient id="sailGradient2" x1="16" y1="8" x2="30" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F0A24C" />
          <stop offset="100%" stopColor="#8A4E1B" />
        </linearGradient>
      </defs>
      {/* Sleek geometric main sail */}
      <path
        d="M6 28L18 4C18 4 19.5 16 26 24C19 25 12 27 6 28Z"
        fill="url(#sailGradient1)"
      />
      {/* Jib / secondary wind curve */}
      <path
        d="M17 6L29 23.5C25 21 21.5 16 19.5 9.5L17 6Z"
        fill="url(#sailGradient2)"
        opacity="0.85"
      />
      {/* Keel / bottom baseline subtle glow */}
      <path
        d="M5 28.5C12 28.5 24 26.5 28 24.5"
        stroke="#FFA64D"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};
