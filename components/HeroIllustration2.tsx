'use client';

export default function HeroIllustration2() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
      <svg
        viewBox="0 0 460 390"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[540px]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="bg2" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#1e1a6e" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#0E155B" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#9D62FA"/>
            <stop offset="100%" stopColor="#6366f1"/>
          </linearGradient>
          <linearGradient id="barGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#4ade80"/>
            <stop offset="100%" stopColor="#22d3ee"/>
          </linearGradient>
          <linearGradient id="sparkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%"   stopColor="#9D62FA" stopOpacity="0"/>
            <stop offset="100%" stopColor="#9D62FA" stopOpacity="0.4"/>
          </linearGradient>
          <filter id="cardShadow">
            <feDropShadow dx="0" dy="8" stdDeviation="20" floodColor="#000" floodOpacity="0.5"/>
          </filter>
          <filter id="glowGreen">
            <feGaussianBlur stdDeviation="2" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <clipPath id="progressClip">
            <rect x="16" y="100" width="220" height="8" rx="4"/>
          </clipPath>
          <clipPath id="mainCardClip">
            <rect x="12" y="12" width="288" height="366" rx="14"/>
          </clipPath>
        </defs>

        {/* Ambient background */}
        <ellipse cx="230" cy="195" rx="220" ry="190" fill="url(#bg2)"/>

        {/* ═══════════════════════════════════════════
            MAIN CARD — Live scraping panel
        ═══════════════════════════════════════════ */}
        <rect x="12" y="12" width="288" height="366" rx="14"
          fill="rgba(8,10,35,0.96)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"
          filter="url(#cardShadow)"/>

        {/* Subtle top gradient line */}
        <rect x="12" y="12" width="288" height="2" rx="1" fill="rgba(157,98,250,0.5)"/>

        {/* ── Header ── */}
        {/* Traffic lights */}
        <circle cx="32"  cy="34" r="5" fill="#ff5f57"/>
        <circle cx="48"  cy="34" r="5" fill="#febc2e"/>
        <circle cx="64"  cy="34" r="5" fill="#28c840"/>
        {/* Title */}
        <text x="84" y="38" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="monospace">autoscraping</text>
        {/* LIVE badge */}
        <rect x="232" y="24" width="52" height="18" rx="9" fill="rgba(74,222,128,0.12)" stroke="rgba(74,222,128,0.35)" strokeWidth="1"/>
        <circle cx="244" cy="33" r="3" fill="#4ade80" filter="url(#glowGreen)">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite"/>
        </circle>
        <text x="252" y="38" fill="#4ade80" fontSize="9" fontFamily="monospace" fontWeight="bold">LIVE</text>

        {/* Divider */}
        <line x1="12" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>

        {/* ── URL bar ── */}
        <rect x="24" y="60" width="264" height="28" rx="6"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        {/* Lock icon */}
        <rect x="35" y="69" width="7" height="6" rx="1" fill="none" stroke="rgba(74,222,128,0.7)" strokeWidth="1.2"/>
        <path d="M 35 70 Q 35 66 38.5 66 Q 42 66 42 70" fill="none" stroke="rgba(74,222,128,0.7)" strokeWidth="1.2"/>
        <text x="50" y="78" fill="rgba(255,255,255,0.35)" fontSize="9.5" fontFamily="monospace">https://</text>
        <text x="88" y="78" fill="rgba(255,255,255,0.8)" fontSize="9.5" fontFamily="monospace">ecommerce.com/products</text>
        {/* Blinking cursor */}
        <rect x="272" y="68" width="1.5" height="11" rx="1" fill="rgba(157,98,250,0.9)">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
        </rect>

        {/* ── Progress bar ── */}
        <text x="24" y="108" fill="rgba(255,255,255,0.35)" fontSize="8.5" fontFamily="monospace">Extracting data...</text>
        <text x="260" y="108" fill="#9D62FA" fontSize="8.5" fontFamily="monospace" textAnchor="end">
          <animate attributeName="textLength" from="0" to="22" dur="0.01s" fill="freeze"/>
          78%
        </text>
        {/* Track */}
        <rect x="24" y="112" width="264" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
        {/* Fill */}
        <rect x="24" y="112" width="0" height="6" rx="3" fill="url(#progressGrad)" clipPath="url(#progressClip)">
          <animate attributeName="width" values="0;206;206" keyTimes="0;0.6;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 0 0"/>
        </rect>
        {/* Shimmer on progress bar */}
        <rect x="24" y="112" width="30" height="6" rx="3" fill="rgba(255,255,255,0.12)">
          <animate attributeName="x" values="20;230;230" keyTimes="0;0.6;1" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;0.6;0" keyTimes="0;0.3;0.6" dur="4s" repeatCount="indefinite"/>
        </rect>

        {/* ── Table header ── */}
        <rect x="24" y="128" width="264" height="20" rx="4" fill="rgba(255,255,255,0.04)"/>
        <text x="32"  y="142" fill="rgba(255,255,255,0.3)" fontSize="8.5" fontFamily="monospace" fontWeight="bold">PRODUCT NAME</text>
        <text x="178" y="142" fill="rgba(255,255,255,0.3)" fontSize="8.5" fontFamily="monospace" fontWeight="bold">PRICE</text>
        <text x="235" y="142" fill="rgba(255,255,255,0.3)" fontSize="8.5" fontFamily="monospace" fontWeight="bold">STATUS</text>

        {/* ── Data rows (fading in sequentially) ── */}
        {[
          { name: 'Wireless Headphones Pro', price: '$199', ok: true,  y: 160, delay: '0.4s' },
          { name: 'Smart Watch Series X',    price: '$349', ok: true,  y: 183, delay: '0.9s' },
          { name: 'USB-C Hub 7-in-1',        price: '$89',  ok: false, y: 206, delay: '1.4s' },
          { name: 'Mechanical Keyboard',     price: '$229', ok: true,  y: 229, delay: '1.9s' },
          { name: '4K Webcam Ultra',         price: '$159', ok: true,  y: 252, delay: '2.4s' },
          { name: 'Portable SSD 1TB',        price: '$119', ok: true,  y: 275, delay: '2.9s' },
        ].map((row, i) => (
          <g key={i} opacity="0">
            <animate attributeName="opacity" from="0" to="1" begin={row.delay} dur="0.4s" fill="freeze"/>
            {/* Alternating row bg */}
            {i % 2 === 0 && <rect x="24" y={row.y - 13} width="264" height="20" rx="3" fill="rgba(255,255,255,0.02)"/>}
            {/* Row indicator */}
            <rect x="24" y={row.y - 10} width="2" height="14" rx="1" fill={row.ok ? '#4ade80' : '#f87171'} opacity="0.7"/>
            <text x="32" y={row.y} fill="rgba(255,255,255,0.75)" fontSize="9" fontFamily="monospace">{row.name}</text>
            <text x="178" y={row.y} fill="rgba(157,98,250,0.95)" fontSize="9" fontFamily="monospace" fontWeight="bold">{row.price}</text>
            <circle cx="248" cy={row.y - 4} r="5"
              fill={row.ok ? 'rgba(74,222,128,0.15)' : 'rgba(248,113,113,0.15)'}
              stroke={row.ok ? 'rgba(74,222,128,0.5)' : 'rgba(248,113,113,0.5)'}
              strokeWidth="1"/>
            <text x="248" y={row.y - 1} textAnchor="middle" fill={row.ok ? '#4ade80' : '#f87171'} fontSize="8" fontFamily="monospace">
              {row.ok ? '✓' : '✗'}
            </text>
          </g>
        ))}

        {/* Scanning line */}
        <rect x="24" y="148" width="264" height="1.5" rx="1" fill="rgba(157,98,250,0.4)" opacity="0">
          <animate attributeName="y"     values="148;295;148" dur="3s" repeatCount="indefinite" calcMode="linear"/>
          <animate attributeName="opacity" values="0;0.6;0.6;0" keyTimes="0;0.05;0.95;1" dur="3s" repeatCount="indefinite"/>
        </rect>

        {/* ── Footer status bar ── */}
        <line x1="12" y1="305" x2="300" y2="305" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        <circle cx="28" cy="320" r="3.5" fill="#4ade80" filter="url(#glowGreen)">
          <animate attributeName="r" values="3.5;5;3.5" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text x="38" y="324" fill="rgba(255,255,255,0.3)" fontSize="8.5" fontFamily="monospace">Connected · 0 errors</text>
        <text x="252" y="324" fill="rgba(255,255,255,0.2)" fontSize="8.5" fontFamily="monospace" textAnchor="end">v5.2.1</text>

        {/* ═══════════════════════════════════════════
            RIGHT CARDS
        ═══════════════════════════════════════════ */}

        {/* ── Card: Records ── */}
        <rect x="314" y="12" width="134" height="116" rx="12"
          fill="rgba(8,10,35,0.96)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"
          filter="url(#cardShadow)"/>
        <rect x="314" y="12" width="134" height="2" rx="1" fill="rgba(157,98,250,0.4)"/>
        <text x="326" y="32" fill="rgba(255,255,255,0.3)" fontSize="8.5" fontFamily="monospace" fontWeight="bold" letterSpacing="0.5">TOTAL RECORDS</text>
        {/* Big number with count-up feel */}
        <text x="326" y="68" fill="white" fontSize="30" fontFamily="monospace" fontWeight="bold" opacity="0">
          <animate attributeName="opacity" from="0" to="1" begin="0.3s" dur="0.4s" fill="freeze"/>
          24,891
        </text>
        <text x="326" y="68" fill="rgba(255,255,255,0.15)" fontSize="30" fontFamily="monospace" fontWeight="bold">
          <animate attributeName="opacity" values="1;0" begin="0.3s" dur="0.1s" fill="freeze"/>
          ──────
        </text>
        {/* Uptick */}
        <polygon points="326,88 330,82 334,88" fill="#4ade80"/>
        <text x="338" y="88" fill="#4ade80" fontSize="9.5" fontFamily="monospace" fontWeight="bold">+1,247 today</text>
        {/* Sparkline */}
        <polyline points="326,106 338,102 350,104 362,98 374,101 386,94 398,96 410,90 422,88 434,85 446,82"
          fill="none" stroke="rgba(157,98,250,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="326,108 446,108 446,82 434,85 422,88 410,90 398,96 386,94 374,101 362,98 350,104 338,102 326,106"
          fill="url(#sparkGrad)" opacity="0.5"/>

        {/* ── Card: Speed ── */}
        <rect x="314" y="140" width="134" height="110" rx="12"
          fill="rgba(8,10,35,0.96)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"
          filter="url(#cardShadow)"/>
        <rect x="314" y="140" width="134" height="2" rx="1" fill="rgba(34,211,238,0.4)"/>
        <text x="326" y="160" fill="rgba(255,255,255,0.3)" fontSize="8.5" fontFamily="monospace" fontWeight="bold">REQ / SECOND</text>
        <text x="326" y="192" fill="white" fontSize="32" fontFamily="monospace" fontWeight="bold">47</text>
        <text x="368" y="192" fill="rgba(34,211,238,0.6)" fontSize="11" fontFamily="monospace">req/s</text>
        {/* Mini bar chart */}
        {[18, 28, 22, 36, 30, 42, 35, 47].map((h, i) => (
          <rect key={i}
            x={326 + i * 14} y={240 - h * 0.55} width="10" height={h * 0.55} rx="2"
            fill={i === 7 ? '#22d3ee' : 'rgba(34,211,238,0.25)'}>
            <animate attributeName="height" values={`${h * 0.55};${(h + 5) * 0.55};${h * 0.55}`}
              dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite" begin={`${i * 0.1}s`}/>
            <animate attributeName="y" values={`${240 - h * 0.55};${240 - (h + 5) * 0.55};${240 - h * 0.55}`}
              dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite" begin={`${i * 0.1}s`}/>
          </rect>
        ))}

        {/* ── Card: Success Rate ── */}
        <rect x="314" y="262" width="134" height="116" rx="12"
          fill="rgba(8,10,35,0.96)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"
          filter="url(#cardShadow)"/>
        <rect x="314" y="262" width="134" height="2" rx="1" fill="rgba(74,222,128,0.4)"/>
        <text x="326" y="282" fill="rgba(255,255,255,0.3)" fontSize="8.5" fontFamily="monospace" fontWeight="bold">SUCCESS RATE</text>
        {/* Arc gauge */}
        <circle cx="381" cy="330" r="28" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6"/>
        {/* 99.8% arc — circumference of r=28 is ~175.9. 99.8% = 175.5 */}
        <circle cx="381" cy="330" r="28" fill="none" stroke="url(#barGrad)" strokeWidth="6"
          strokeDasharray="175 176" strokeDashoffset="44" strokeLinecap="round"
          transform="rotate(-230 381 330)">
          <animate attributeName="stroke-dasharray" values="0 176;175 176" begin="0.5s" dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1"/>
        </circle>
        <text x="381" y="326" textAnchor="middle" fill="white" fontSize="13" fontFamily="monospace" fontWeight="bold">99.8%</text>
        <text x="381" y="340" textAnchor="middle" fill="rgba(74,222,128,0.7)" fontSize="8" fontFamily="monospace">success</text>

        {/* ── Connecting glow dot between cards and main ── */}
        <circle cx="312" cy="70" r="3" fill="rgba(157,98,250,0.4)">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="312" cy="195" r="3" fill="rgba(34,211,238,0.4)">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="0.6s"/>
        </circle>
        <circle cx="312" cy="320" r="3" fill="rgba(74,222,128,0.4)">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="1.2s"/>
        </circle>
      </svg>
    </div>
  );
}
