import React from 'react';

const Logo = ({ width = 40, height = 40 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="logo-svg"
    >
      <defs>
        <linearGradient id="scannerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <rect 
        x="30" 
        y="30" 
        width="140" 
        height="140" 
        rx="10" 
        stroke="url(#scannerGradient)" 
        strokeWidth="3" 
        fill="none"
      />
      <line 
        x1="30" 
        y1="60" 
        x2="170" 
        y2="60" 
        stroke="url(#scannerGradient)" 
        strokeWidth="2" 
        strokeDasharray="5 3"
      />
      <line 
        x1="30" 
        y1="140" 
        x2="170" 
        y2="140" 
        stroke="url(#scannerGradient)" 
        strokeWidth="2" 
        strokeDasharray="5 3"
      />
      <text 
        x="65" 
        y="120" 
        fontFamily="Orbitron, monospace" 
        fontSize="60" 
        fontWeight="bold" 
        fill="url(#scannerGradient)"
      >
        JD
      </text>
      <circle cx="170" cy="30" r="5" fill="#3b82f6">
        <animate 
          attributeName="r" 
          values="5;8;5" 
          dur="1.5s" 
          repeatCount="indefinite" 
        />
      </circle>
    </svg>
  );
};

export default Logo;
