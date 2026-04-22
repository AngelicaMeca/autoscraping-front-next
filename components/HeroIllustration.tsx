'use client';

export default function HeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
      <svg
        viewBox="0 0 440 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[520px]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e1a6e" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0E155B" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hubGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%"   stopColor="#c4b5fd" />
            <stop offset="45%"  stopColor="#9D62FA" />
            <stop offset="100%" stopColor="#5b21b6" />
          </radialGradient>
          <radialGradient id="srcGrad" cx="35%" cy="30%" r="65%">
            <stop offset="0%"  stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#3730a3" />
          </radialGradient>
          <radialGradient id="outGrad" cx="35%" cy="30%" r="65%">
            <stop offset="0%"  stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#0e7490" />
          </radialGradient>
          <filter id="glow3">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow6">
            <feGaussianBlur stdDeviation="6" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#9D62FA" floodOpacity="0.4"/>
          </filter>

          {/* Motion paths — sources → hub */}
          <path id="mp1" d="M 72,82  C 130,82  160,190 220,190" />
          <path id="mp2" d="M 72,190 C 130,190 160,190 220,190" />
          <path id="mp3" d="M 72,308 C 130,308 160,190 220,190" />
          {/* Motion paths — hub → outputs */}
          <path id="mp4" d="M 220,190 C 280,190 310,82  368,82"  />
          <path id="mp5" d="M 220,190 C 280,190 310,190 368,190" />
          <path id="mp6" d="M 220,190 C 280,190 310,308 368,308" />
        </defs>

        {/* Ambient glow background */}
        <ellipse cx="220" cy="200" rx="200" ry="180" fill="url(#bg)" />

        {/* ─── Connection curves ────────────────────────────────────── */}

        {/* Source curves (purple, data coming IN) */}
        <path d="M 72,82  C 130,82  160,190 220,190" fill="none" stroke="#9D62FA" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="7 9">
          <animate attributeName="stroke-dashoffset" from="0" to="-48" dur="1.5s" repeatCount="indefinite" />
        </path>
        <path d="M 72,190 C 130,190 160,190 220,190" fill="none" stroke="#9D62FA" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="7 9">
          <animate attributeName="stroke-dashoffset" from="0" to="-48" dur="1.8s" repeatCount="indefinite" />
        </path>
        <path d="M 72,308 C 130,308 160,190 220,190" fill="none" stroke="#9D62FA" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="7 9">
          <animate attributeName="stroke-dashoffset" from="0" to="-48" dur="1.6s" repeatCount="indefinite" />
        </path>

        {/* Output curves (cyan, data going OUT) */}
        <path d="M 220,190 C 280,190 310,82  368,82"  fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="7 9">
          <animate attributeName="stroke-dashoffset" from="0" to="-48" dur="1.7s" repeatCount="indefinite" />
        </path>
        <path d="M 220,190 C 280,190 310,190 368,190" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="7 9">
          <animate attributeName="stroke-dashoffset" from="0" to="-48" dur="1.4s" repeatCount="indefinite" />
        </path>
        <path d="M 220,190 C 280,190 310,308 368,308" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="7 9">
          <animate attributeName="stroke-dashoffset" from="0" to="-48" dur="2s" repeatCount="indefinite" />
        </path>

        {/* ─── Data packets (animateMotion — no transform conflicts) ─── */}
        <circle r="4.5" fill="#c4b5fd" filter="url(#glow3)">
          <animateMotion dur="2s" repeatCount="indefinite" begin="0s"><mpath href="#mp1"/></animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2s" repeatCount="indefinite" begin="0s"/>
        </circle>
        <circle r="4.5" fill="#c4b5fd" filter="url(#glow3)">
          <animateMotion dur="2.2s" repeatCount="indefinite" begin="0.7s"><mpath href="#mp2"/></animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.2s" repeatCount="indefinite" begin="0.7s"/>
        </circle>
        <circle r="4.5" fill="#c4b5fd" filter="url(#glow3)">
          <animateMotion dur="1.9s" repeatCount="indefinite" begin="1.3s"><mpath href="#mp3"/></animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="1.9s" repeatCount="indefinite" begin="1.3s"/>
        </circle>
        <circle r="4.5" fill="#67e8f9" filter="url(#glow3)">
          <animateMotion dur="2.1s" repeatCount="indefinite" begin="0.4s"><mpath href="#mp4"/></animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.1s" repeatCount="indefinite" begin="0.4s"/>
        </circle>
        <circle r="4.5" fill="#67e8f9" filter="url(#glow3)">
          <animateMotion dur="1.7s" repeatCount="indefinite" begin="1s"><mpath href="#mp5"/></animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="1.7s" repeatCount="indefinite" begin="1s"/>
        </circle>
        <circle r="4.5" fill="#67e8f9" filter="url(#glow3)">
          <animateMotion dur="2.3s" repeatCount="indefinite" begin="1.7s"><mpath href="#mp6"/></animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.3s" repeatCount="indefinite" begin="1.7s"/>
        </circle>

        {/* ─── SOURCE NODES (left, purple) ─────────────────────────── */}

        {/* Node 1 — Website / browser */}
        <g transform="translate(72, 82)">
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-7; 0,0" dur="3.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
            <circle r="30" fill="#1a1060" stroke="rgba(157,98,250,0.5)" strokeWidth="1.5" filter="url(#shadow)"/>
            <circle r="30" fill="url(#srcGrad)" opacity="0.9"/>
            {/* Browser icon */}
            <rect x="-16" y="-13" width="32" height="22" rx="3" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.4"/>
            <line x1="-16" y1="-6" x2="16" y2="-6" stroke="rgba(255,255,255,0.45)" strokeWidth="1"/>
            <circle cx="-11" cy="-9.5" r="1.8" fill="#ff6b6b"/>
            <circle cx="-5.5" cy="-9.5" r="1.8" fill="#ffd93d"/>
            <circle cx="0"   cy="-9.5" r="1.8" fill="#6bcb77"/>
            <rect x="-12" y="-2" width="24" height="2.5" rx="1" fill="rgba(255,255,255,0.2)"/>
            <rect x="-12" y="2.5" width="18" height="2.5" rx="1" fill="rgba(255,255,255,0.15)"/>
            <rect x="-12" y="7" width="20" height="2.5" rx="1" fill="rgba(255,255,255,0.15)"/>
          </g>
        </g>
        <text x="72" y="122" textAnchor="middle" fill="rgba(196,181,253,0.7)" fontSize="9" fontFamily="monospace">website</text>

        {/* Node 2 — API */}
        <g transform="translate(72, 190)">
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-7; 0,0" dur="4s" repeatCount="indefinite" begin="0.6s" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
            <circle r="30" fill="#1a1060" stroke="rgba(157,98,250,0.5)" strokeWidth="1.5" filter="url(#shadow)"/>
            <circle r="30" fill="url(#srcGrad)" opacity="0.9"/>
            {/* Code/API icon */}
            <text y="-4" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11" fontWeight="bold" fontFamily="monospace" dominantBaseline="middle">{ }</text>
            <text y="10" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="monospace">API</text>
            <rect x="-16" y="-18" width="32" height="32" rx="4" fill="none" stroke="rgba(157,98,250,0.5)" strokeWidth="1"/>
          </g>
        </g>
        <text x="72" y="230" textAnchor="middle" fill="rgba(196,181,253,0.7)" fontSize="9" fontFamily="monospace">rest api</text>

        {/* Node 3 — Database */}
        <g transform="translate(72, 308)">
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-7; 0,0" dur="3.6s" repeatCount="indefinite" begin="1.2s" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
            <circle r="30" fill="#1a1060" stroke="rgba(157,98,250,0.5)" strokeWidth="1.5" filter="url(#shadow)"/>
            <circle r="30" fill="url(#srcGrad)" opacity="0.9"/>
            {/* DB cylinder icon */}
            <ellipse cx="0" cy="-10" rx="12" ry="4" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.3"/>
            <line x1="-12" y1="-10" x2="-12" y2="6"  stroke="rgba(255,255,255,0.5)" strokeWidth="1.3"/>
            <line x1="12"  y1="-10" x2="12"  y2="6"  stroke="rgba(255,255,255,0.5)" strokeWidth="1.3"/>
            <ellipse cx="0" cy="6"  rx="12" ry="4" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.3"/>
            <ellipse cx="0" cy="-2" rx="12" ry="4" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          </g>
        </g>
        <text x="72" y="348" textAnchor="middle" fill="rgba(196,181,253,0.7)" fontSize="9" fontFamily="monospace">database</text>

        {/* ─── CENTRAL HUB ─────────────────────────────────────────── */}
        <g transform="translate(220, 190)">
          {/* Outer pulsing ring */}
          <circle r="62" fill="rgba(157,98,250,0.08)" stroke="rgba(157,98,250,0.2)" strokeWidth="1">
            <animate attributeName="r" values="62;68;62" dur="2.8s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.5;1" dur="2.8s" repeatCount="indefinite"/>
          </circle>
          {/* Mid ring */}
          <circle r="52" fill="rgba(157,98,250,0.12)" stroke="rgba(157,98,250,0.3)" strokeWidth="1.2">
            <animate attributeName="r" values="52;56;52" dur="2.8s" repeatCount="indefinite" begin="0.3s"/>
          </circle>
          {/* Core */}
          <circle r="40" fill="url(#hubGrad)" filter="url(#glow6)">
            <animate attributeName="r" values="40;43;40" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          {/* Scan line effect inside core */}
          <clipPath id="cc"><circle r="40"/></clipPath>
          <rect x="-40" y="-2" width="80" height="3" rx="1.5" fill="rgba(255,255,255,0.12)" clipPath="url(#cc)">
            <animateTransform attributeName="transform" type="translate" values="0,-42; 0,42" dur="3s" repeatCount="indefinite" calcMode="linear"/>
          </rect>
          {/* Logo text */}
          <text y="-6" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.5">AUTO</text>
          <text y="9" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8.5" fontFamily="monospace" letterSpacing="1">scraping</text>
          {/* Status dots */}
          <circle cx="-12" cy="20" r="2.5" fill="#4ade80">
            <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="-4"  cy="20" r="2.5" fill="#4ade80">
            <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" begin="0.4s"/>
          </circle>
          <circle cx="4"   cy="20" r="2.5" fill="#fbbf24">
            <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" begin="0.8s"/>
          </circle>
          <circle cx="12"  cy="20" r="2.5" fill="#4ade80">
            <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" begin="0.2s"/>
          </circle>
        </g>

        {/* ─── OUTPUT NODES (right, cyan) ──────────────────────────── */}

        {/* Node 4 — JSON */}
        <g transform="translate(368, 82)">
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-7; 0,0" dur="3.4s" repeatCount="indefinite" begin="0.3s" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
            <circle r="30" fill="#0a1a30" stroke="rgba(34,211,238,0.45)" strokeWidth="1.5" filter="url(#shadow)"/>
            <circle r="30" fill="url(#outGrad)" opacity="0.75"/>
            {/* JSON brackets */}
            <text x="-8" y="3" fill="rgba(255,255,255,0.9)" fontSize="18" fontFamily="monospace" dominantBaseline="middle">{`{`}</text>
            <text x="2"  y="3" fill="rgba(255,255,255,0.9)" fontSize="18" fontFamily="monospace" dominantBaseline="middle">{`}`}</text>
          </g>
        </g>
        <text x="368" y="122" textAnchor="middle" fill="rgba(103,232,249,0.7)" fontSize="9" fontFamily="monospace">JSON</text>

        {/* Node 5 — Spreadsheet/CSV */}
        <g transform="translate(368, 190)">
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-7; 0,0" dur="4.2s" repeatCount="indefinite" begin="0.9s" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
            <circle r="30" fill="#0a1a30" stroke="rgba(34,211,238,0.45)" strokeWidth="1.5" filter="url(#shadow)"/>
            <circle r="30" fill="url(#outGrad)" opacity="0.75"/>
            {/* Table grid icon */}
            <rect x="-14" y="-13" width="28" height="22" rx="2" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3"/>
            <line x1="-14" y1="-5" x2="14" y2="-5" stroke="rgba(255,255,255,0.45)" strokeWidth="1"/>
            <line x1="-14" y1="3"  x2="14" y2="3"  stroke="rgba(255,255,255,0.45)" strokeWidth="1"/>
            <line x1="-4"  y1="-13" x2="-4" y2="9" stroke="rgba(255,255,255,0.45)" strokeWidth="1"/>
            <line x1="5"   y1="-13" x2="5"  y2="9" stroke="rgba(255,255,255,0.45)" strokeWidth="1"/>
            <rect x="-13" y="-12" width="8" height="6" rx="0" fill="rgba(34,211,238,0.5)"/>
          </g>
        </g>
        <text x="368" y="230" textAnchor="middle" fill="rgba(103,232,249,0.7)" fontSize="9" fontFamily="monospace">CSV / XLS</text>

        {/* Node 6 — Webhook/realtime */}
        <g transform="translate(368, 308)">
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-7; 0,0" dur="3.8s" repeatCount="indefinite" begin="1.5s" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
            <circle r="30" fill="#0a1a30" stroke="rgba(34,211,238,0.45)" strokeWidth="1.5" filter="url(#shadow)"/>
            <circle r="30" fill="url(#outGrad)" opacity="0.75"/>
            {/* Bolt/webhook icon */}
            <polygon points="5,-14 -6,2 4,2 -5,16 10,-2 0,-2" fill="rgba(255,255,255,0.9)"/>
          </g>
        </g>
        <text x="368" y="348" textAnchor="middle" fill="rgba(103,232,249,0.7)" fontSize="9" fontFamily="monospace">webhook</text>

        {/* ─── Labels ─────────────────────────────────────────────── */}
        <text x="72"  y="382" textAnchor="middle" fill="rgba(157,98,250,0.5)" fontSize="8" fontFamily="monospace" letterSpacing="1">SOURCES</text>
        <text x="220" y="382" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace" letterSpacing="1">EXTRACTION</text>
        <text x="368" y="382" textAnchor="middle" fill="rgba(34,211,238,0.5)" fontSize="8" fontFamily="monospace" letterSpacing="1">OUTPUT</text>

        {/* Subtle floating particles */}
        <circle cx="150" cy="50" r="2" fill="#9D62FA" opacity="0">
          <animate attributeName="opacity" values="0;0.6;0" dur="4s" repeatCount="indefinite" begin="0s"/>
          <animate attributeName="cy" values="50;38;50" dur="4s" repeatCount="indefinite" begin="0s"/>
        </circle>
        <circle cx="290" cy="55" r="1.5" fill="#22d3ee" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0" dur="5s" repeatCount="indefinite" begin="1.5s"/>
          <animate attributeName="cy" values="55;43;55" dur="5s" repeatCount="indefinite" begin="1.5s"/>
        </circle>
        <circle cx="220" cy="340" r="2" fill="#9D62FA" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0" dur="4.5s" repeatCount="indefinite" begin="0.8s"/>
          <animate attributeName="cy" values="340;328;340" dur="4.5s" repeatCount="indefinite" begin="0.8s"/>
        </circle>
      </svg>
    </div>
  );
}
