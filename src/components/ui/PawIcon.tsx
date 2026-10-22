import React from 'react';

export function PawIcon({ className = 'w-4 h-4', fill = 'currentColor' }: { className?: string; fill?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
      aria-hidden="true"
    >
      <circle cx="6.5" cy="8.5" r="2.5" />
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="17.5" cy="8.5" r="2.5" />
      <circle cx="4" cy="14" r="2" />
      <path d="M12 11c-3.2 0-5.5 2.2-5.5 5 0 2.2 2 4 5.5 4s5.5-1.8 5.5-4c0-2.8-2.3-5-5-5z" />
    </svg>
  );
}

export function StarIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
    </svg>
  );
}

export function SparkleIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0l2.5 8.5L23 11l-8.5 2.5L12 22l-2.5-8.5L1 11l8.5-2.5z" />
    </svg>
  );
}
