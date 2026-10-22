import React from 'react';

interface ScallopHemProps {
  className?: string;
  fill?: string;
  stroke?: string;
  inverted?: boolean;
}

export function ScallopHem({
  className = 'w-full h-3',
  fill = '#fffdf8',
  stroke = 'transparent',
  inverted = false,
}: ScallopHemProps) {
  return (
    <div className={`overflow-hidden leading-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 20"
        preserveAspectRatio="none"
        className={`w-full h-full block ${inverted ? 'rotate-180' : ''}`}
      >
        <path
          d="M0,0 
             C30,15 60,15 90,0 
             C120,15 150,15 180,0 
             C210,15 240,15 270,0 
             C300,15 330,15 360,0 
             C390,15 420,15 450,0 
             C480,15 510,15 540,0 
             C570,15 600,15 630,0 
             C660,15 690,15 720,0 
             C750,15 780,15 810,0 
             C840,15 870,15 900,0 
             C930,15 960,15 990,0 
             C1020,15 1050,15 1080,0 
             C1110,15 1140,15 1170,0 
             C1185,8 1195,4 1200,0 
             L1200,20 L0,20 Z"
          fill={fill}
          stroke={stroke}
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
