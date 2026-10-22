'use client';

import React, { useState, useEffect, useCallback } from 'react';

export function PawCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [trails, setTrails] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);

    // Check if hovering over a clickable element
    const target = e.target as HTMLElement;
    const clickable = target.closest('a, button, [role="button"], input, select, textarea, [tabindex]');
    setIsPointer(!!clickable);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    const id = Date.now();
    setTrails(prev => [...prev.slice(-4), { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => {
      setTrails(prev => prev.filter(t => t.id !== id));
    }, 600);
  },
    []);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;
    47





    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('click', handleClick);

    // Hide default cursor
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    // Add styles to hide cursor on all interactive elements
    const style = document.createElement('style');
    style.id = 'paw-cursor-style';
    style.textContent = '*, *::before, *::after { cursor: none !important; }';
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('click', handleClick);
      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
      const el = document.getElementById('paw-cursor-style');
      if (el) el.remove();
    };
  }, [handleMouseMove, handleMouseLeave, handleClick]);

  return (
    <>
      {/* Main paw cursor */}
      <div
        className="paw-cursor-main"
        style={{
          position: 'fixed',
          left: position.x - 12,
          top: position.y - 12,
          width: 24,
          height: 24,
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transform: isPointer ? 'scale(1.4) rotate(-15deg)' : 'scale(1)',
          transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
        }}
      >
        <svg viewBox="0 0 24 24" fill="#a24a1a" width="24" height="24">
          <circle cx="6.5" cy="8.5" r="2.5" />
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="17.5" cy="8.5" r="2.5" />
          <circle cx="4" cy="14" r="2" />
          <path d="M12 11c-3.2 0-5.5 2.2-5.5 5 0 2.2 2 4 5.5 4s5.5-1.8 5.5-4c0-2.8-2.3-5-5-5z" />
        </svg>
      </div>

      {/* Paw trail on click */}
      {trails.map(trail => (
        <div
          key={trail.id}
          className="paw-trail"
          style={{
            position: 'fixed',
            left: trail.x - 10,
            top: trail.y - 10,
            width: 20,
            height: 20,
            pointerEvents: 'none',
            zIndex: 9998,
            animation: 'pawTrailFade 0.6s ease-out forwards',
          }}
        >
          <svg viewBox="0 0 24 24" fill="#f2be6b" width="20" height="20" opacity="0.7">
            <circle cx="6.5" cy="8.5" r="2.5" />
            <circle cx="12" cy="5" r="2.5" />
            <circle cx="17.5" cy="8.5" r="2.5" />
            <circle cx="4" cy="14" r="2" />
            <path d="M12 11c-3.2 0-5.5 2.2-5.5 5 0 2.2 2 4 5.5 4s5.5-1.8 5.5-4c0-2.8-2.3-5-5-5z" />
          </svg>
        </div>
      ))}
    </>
  );
}
