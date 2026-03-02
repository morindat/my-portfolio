import React from 'react';

const LogoPreview = () => {
  const logos = [
    {
      name: "Option 1: Cyber Circuit",
      svg: `<svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8b5cf6" />
            <stop offset="100%" stop-color="#06b6d4" />
          </linearGradient>
        </defs>
        <path d="M40 100 L80 40 L120 160 L160 100" stroke="url(#grad1)" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="80" cy="40" r="6" fill="#8b5cf6" />
        <circle cx="120" cy="160" r="6" fill="#06b6d4" />
        <circle cx="40" cy="100" r="6" fill="#8b5cf6" />
        <circle cx="160" cy="100" r="6" fill="#06b6d4" />
      </svg>`
    },
    {
      name: "Option 2: Neon Glitch",
      svg: `<svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#c084fc" />
            <stop offset="50%" stop-color="#a855f7" />
            <stop offset="100%" stop-color="#7e22ce" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <text x="45" y="130" font-family="Orbitron, monospace" font-size="100" font-weight="900" fill="url(#grad2)" filter="url(#glow)">J</text>
        <text x="105" y="130" font-family="Orbitron, monospace" font-size="100" font-weight="900" fill="url(#grad2)" filter="url(#glow)">D</text>
      </svg>`
    },
    {
      name: "Option 3: Holographic",
      svg: `<svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#a855f7" stop-opacity="0.8" />
            <stop offset="50%" stop-color="#ec4899" stop-opacity="0.6" />
            <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.8" />
          </linearGradient>
        </defs>
        <path d="M60 60 L140 60 L140 140 L60 140 Z" stroke="url(#grad3)" stroke-width="6" fill="none" stroke-dasharray="10 10"/>
        <line x1="60" y1="80" x2="140" y2="120" stroke="url(#grad3)" stroke-width="4" stroke-dasharray="5 5"/>
        <line x1="60" y1="120" x2="140" y2="80" stroke="url(#grad3)" stroke-width="4" stroke-dasharray="5 5"/>
        <text x="70" y="130" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="white" fill-opacity="0.2">JD</text>
      </svg>`
    },
    {
      name: "Option 4: Binary Code",
      svg: `<svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="100%" stop-color="#a855f7" />
          </linearGradient>
        </defs>
        <rect x="40" y="40" width="30" height="120" fill="url(#grad4)" rx="5" />
        <rect x="90" y="40" width="30" height="120" fill="url(#grad4)" rx="5" />
        <rect x="140" y="40" width="30" height="120" fill="url(#grad4)" rx="5" />
        <text x="45" y="100" font-family="monospace" font-size="40" font-weight="bold" fill="#0a0a0f">1</text>
        <text x="95" y="60" font-family="monospace" font-size="40" font-weight="bold" fill="#0a0a0f">0</text>
        <text x="145" y="140" font-family="monospace" font-size="40" font-weight="bold" fill="#0a0a0f">1</text>
      </svg>`
    },
    {
      name: "Option 5: Portal Ring",
      svg: `<svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8b5cf6" />
            <stop offset="100%" stop-color="#ec4899" />
          </linearGradient>
          <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#a855f7" stop-opacity="0.2" />
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="70" stroke="url(#grad5)" stroke-width="4" fill="url(#ringGlow)"/>
        <circle cx="100" cy="100" r="50" stroke="url(#grad5)" stroke-width="2" fill="none" stroke-dasharray="4 4"/>
        <text x="55" y="120" font-family="Orbitron, monospace" font-size="60" font-weight="bold" fill="white" filter="url(#glow)">JD</text>
      </svg>`
    },
    {
      name: "Option 6: Quantum Pulse",
      svg: `<svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#c026d3" />
            <stop offset="50%" stop-color="#6b21a8" />
            <stop offset="100%" stop-color="#1e1b4b" />
          </linearGradient>
        </defs>
        <path d="M40 100 Q70 40 100 100 Q130 160 160 100" stroke="url(#grad6)" stroke-width="6" fill="none"/>
        <circle cx="100" cy="100" r="15" fill="#8b5cf6" filter="url(#glow)">
          <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="60" y="100" font-family="monospace" font-size="20" fill="white" fill-opacity="0.5">JD</text>
      </svg>`
    },
    {
      name: "Option 7: Cybernetic",
      svg: `<svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#2563eb" />
            <stop offset="50%" stop-color="#7e22ce" />
            <stop offset="100%" stop-color="#db2777" />
          </linearGradient>
        </defs>
        <polygon points="100,40 160,70 160,130 100,160 40,130 40,70" stroke="url(#grad7)" stroke-width="4" fill="none"/>
        <line x1="100" y1="40" x2="100" y2="160" stroke="url(#grad7)" stroke-width="2" stroke-dasharray="4 4"/>
        <line x1="40" y1="100" x2="160" y2="100" stroke="url(#grad7)" stroke-width="2" stroke-dasharray="4 4"/>
        <circle cx="100" cy="100" r="25" fill="#0a0a0f" stroke="url(#grad7)" stroke-width="2"/>
        <text x="85" y="115" font-family="Orbitron, monospace" font-size="30" font-weight="bold" fill="url(#grad7)">JD</text>
      </svg>`
    },
    {
      name: "Option 8: Minimal Scanner",
      svg: `<svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#a855f7" />
            <stop offset="100%" stop-color="#0ea5e9" />
          </linearGradient>
        </defs>
        <rect x="30" y="30" width="140" height="140" rx="10" stroke="url(#grad8)" stroke-width="3" fill="none"/>
        <line x1="30" y1="60" x2="170" y2="60" stroke="url(#grad8)" stroke-width="2" stroke-dasharray="5 3"/>
        <line x1="30" y1="140" x2="170" y2="140" stroke="url(#grad8)" stroke-width="2" stroke-dasharray="5 3"/>
        <text x="65" y="120" font-family="Orbitron, monospace" font-size="60" font-weight="bold" fill="url(#grad8)">JD</text>
        <circle cx="170" cy="30" r="5" fill="#0ea5e9">
          <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>`
    }
  ];

  return (
    <div style={{ padding: '20px', background: '#0a0a0f', minHeight: '100vh' }}>
      <h1 style={{ color: 'white', marginBottom: '30px', fontFamily: 'Orbitron, monospace' }}>Sci-Fi Logo Options</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        {logos.map((logo, index) => (
          <div key={index} style={{ 
            background: '#1a1a2e', 
            padding: '30px', 
            borderRadius: '15px',
            textAlign: 'center',
            border: '1px solid #333',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)'
          }}>
            <div dangerouslySetInnerHTML={{ __html: logo.svg }} />
            <p style={{ color: 'white', marginTop: '15px', fontFamily: 'Orbitron, monospace', fontSize: '14px' }}>{logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoPreview;