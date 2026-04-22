'use client';

export default function HeroDecoration() {
  return (
    <svg
      viewBox="0 0 600 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        {/* Orb gradients */}
        <radialGradient id="dOrb1" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#9D62FA" stopOpacity="0.55"/>
          <stop offset="55%"  stopColor="#6d28d9" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#0E155B" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="dOrb2" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#7c3aed" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#0E155B" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="dOrb3" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#4f46e5" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#0E155B" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="dOrb4" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#a855f7" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#0E155B" stopOpacity="0"/>
        </radialGradient>

        {/* Blur filters */}
        <filter id="dBlur50"><feGaussianBlur stdDeviation="50"/></filter>
        <filter id="dBlur30"><feGaussianBlur stdDeviation="30"/></filter>
        <filter id="dBlur15"><feGaussianBlur stdDeviation="15"/></filter>
        <filter id="dGlow">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="dGlowSm">
          <feGaussianBlur stdDeviation="1.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>

        {/* Subtle dot grid pattern */}
        <pattern id="dGrid" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="24" cy="24" r="0.8" fill="rgba(167,139,250,0.18)"/>
        </pattern>

        {/* Gradient for light streaks */}
        <linearGradient id="dStreak1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="rgba(157,98,250,0)" />
          <stop offset="40%"  stopColor="rgba(157,98,250,0.4)"/>
          <stop offset="100%" stopColor="rgba(157,98,250,0)"/>
        </linearGradient>
        <linearGradient id="dStreak2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="rgba(99,102,241,0)"/>
          <stop offset="50%"  stopColor="rgba(99,102,241,0.3)"/>
          <stop offset="100%" stopColor="rgba(99,102,241,0)"/>
        </linearGradient>
      </defs>

      {/* ── Dot grid background ── */}
      <rect width="600" height="900" fill="url(#dGrid)" opacity="0.7"/>

      {/* ════════════════════════
          AMBIENT ORBS (blurred)
      ════════════════════════ */}

      {/* Primary large orb — top center */}
      <circle cx="340" cy="230" r="300" fill="url(#dOrb1)" filter="url(#dBlur50)">
        <animate attributeName="r"       values="300;345;300" dur="9s"  repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
        <animate attributeName="cy"      values="230;210;230" dur="9s"  repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
        <animate attributeName="opacity" values="0.85;1;0.85" dur="9s"  repeatCount="indefinite"/>
      </circle>

      {/* Secondary orb — bottom left */}
      <circle cx="100" cy="680" r="240" fill="url(#dOrb2)" filter="url(#dBlur50)">
        <animate attributeName="r"       values="240;280;240" dur="11s" repeatCount="indefinite" begin="2s" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
        <animate attributeName="opacity" values="0.7;1;0.7"   dur="11s" repeatCount="indefinite" begin="2s"/>
      </circle>

      {/* Accent orb — right center */}
      <circle cx="530" cy="500" r="200" fill="url(#dOrb3)" filter="url(#dBlur50)">
        <animate attributeName="r"       values="200;240;200" dur="8s"  repeatCount="indefinite" begin="1s" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
        <animate attributeName="cy"      values="500;530;500" dur="8s"  repeatCount="indefinite" begin="1s"/>
      </circle>

      {/* Small accent orb — top right */}
      <circle cx="490" cy="120" r="130" fill="url(#dOrb4)" filter="url(#dBlur30)">
        <animate attributeName="r"       values="130;155;130" dur="7s"  repeatCount="indefinite" begin="3s"/>
      </circle>

      {/* Small accent orb — bottom right */}
      <circle cx="520" cy="820" r="150" fill="url(#dOrb2)" filter="url(#dBlur30)">
        <animate attributeName="r"       values="150;175;150" dur="10s" repeatCount="indefinite" begin="4s"/>
      </circle>

      {/* ════════════════════════
          ROTATING ORBITAL RINGS
      ════════════════════════ */}

      {/* Ring 1 — large tilted ellipse */}
      <g transform="translate(320, 420)">
        <ellipse rx="280" ry="105" fill="none" stroke="rgba(157,98,250,0.18)" strokeWidth="1" strokeDasharray="9 16">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="35s" repeatCount="indefinite"/>
        </ellipse>
      </g>

      {/* Ring 2 — medium tilted opposite */}
      <g transform="translate(280, 500)">
        <ellipse rx="210" ry="85" fill="none" stroke="rgba(99,102,241,0.14)" strokeWidth="0.8" strokeDasharray="6 14">
          <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="45s" repeatCount="indefinite"/>
        </ellipse>
      </g>

      {/* Ring 3 — small circle top area */}
      <g transform="translate(390, 200)">
        <circle r="145" fill="none" stroke="rgba(167,139,250,0.12)" strokeWidth="0.8" strokeDasharray="4 18">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="28s" repeatCount="indefinite"/>
        </circle>
      </g>

      {/* Ring 4 — very large outer, slow */}
      <g transform="translate(300, 480)">
        <ellipse rx="350" ry="140" fill="none" stroke="rgba(109,40,217,0.08)" strokeWidth="0.7" strokeDasharray="12 22">
          <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="60s" repeatCount="indefinite"/>
        </ellipse>
      </g>

      {/* Ring 5 — small bottom ring */}
      <g transform="translate(440, 720)">
        <circle r="100" fill="none" stroke="rgba(157,98,250,0.1)" strokeWidth="0.7" strokeDasharray="5 12">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="22s" repeatCount="indefinite"/>
        </circle>
      </g>

      {/* ════════════════════════
          LIGHT STREAKS
      ════════════════════════ */}

      <path d="M -30,180 Q 200,140 540,260" fill="none" stroke="url(#dStreak1)" strokeWidth="1.2">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="6s"  repeatCount="indefinite"/>
      </path>
      <path d="M 30,420  Q 280,360 600,440" fill="none" stroke="url(#dStreak2)" strokeWidth="1">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="8s"  repeatCount="indefinite" begin="2s"/>
      </path>
      <path d="M -20,680 Q 220,620 580,720" fill="none" stroke="url(#dStreak1)" strokeWidth="0.8">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="7s"  repeatCount="indefinite" begin="4s"/>
      </path>
      <path d="M 80,850  Q 320,790 610,860" fill="none" stroke="url(#dStreak2)" strokeWidth="0.8">
        <animate attributeName="opacity" values="0.15;0.5;0.15" dur="9s" repeatCount="indefinite" begin="1s"/>
      </path>

      {/* ════════════════════════
          CONSTELLATION DOTS & LINES
      ════════════════════════ */}

      {/* Lines between nearby dots */}
      {[
        [80,110,  200,80],
        [200,80,  330,110],
        [330,110, 460,80],
        [460,80,  560,150],
        [80,110,  110,240],
        [560,150, 530,270],
        [110,240, 260,290],
        [260,290, 400,260],
        [400,260, 530,270],
        [110,240, 90,390],
        [530,270, 560,400],
        [90,390,  220,430],
        [220,430, 380,410],
        [380,410, 520,440],
        [520,440, 560,400],
        [90,390,  70,540],
        [560,400, 570,540],
        [70,540,  190,580],
        [190,580, 340,560],
        [340,560, 480,570],
        [480,570, 570,540],
        [70,540,  80,680],
        [570,540, 550,680],
        [80,680,  200,720],
        [200,720, 350,700],
        [350,700, 490,720],
        [490,720, 550,680],
        [200,720, 170,840],
        [490,720, 500,840],
      ].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(167,139,250,0.12)" strokeWidth="0.6"/>
      ))}

      {/* Constellation nodes */}
      {[
        [80,110, 2.5, 0],
        [200,80, 2, 0.4],
        [330,110, 3, 0.8],
        [460,80, 2, 1.2],
        [560,150, 2.5, 0.6],
        [110,240, 2, 0.2],
        [260,290, 3, 1.0],
        [400,260, 2, 0.5],
        [530,270, 2.5, 0.9],
        [90,390, 2, 0.3],
        [220,430, 3.5, 0.7],
        [380,410, 2, 1.1],
        [520,440, 2, 0.1],
        [560,400, 2.5, 0.8],
        [70,540, 2, 0.4],
        [190,580, 3, 0.9],
        [340,560, 2.5, 0.6],
        [480,570, 2, 0.2],
        [570,540, 2, 1.3],
        [80,680, 2.5, 0.5],
        [200,720, 3, 1.0],
        [350,700, 2, 0.3],
        [490,720, 2.5, 0.7],
        [550,680, 2, 0.1],
        [170,840, 2, 0.6],
        [500,840, 2, 0.9],
      ].map(([cx, cy, r, delay], i) => (
        <circle key={i} cx={cx} cy={cy} r={r}
          fill="rgba(196,181,253,0.6)" filter="url(#dGlowSm)">
          <animate attributeName="opacity"
            values="0.4;0.9;0.4" dur={`${3 + (i % 4)}s`}
            repeatCount="indefinite" begin={`${delay}s`}/>
          <animate attributeName="r"
            values={`${r};${r * 1.4};${r}`} dur={`${4 + (i % 3)}s`}
            repeatCount="indefinite" begin={`${delay}s`}/>
        </circle>
      ))}

      {/* ════════════════════════
          FLOATING PARTICLES
      ════════════════════════ */}

      {[
        [140, 160, 2.2, 5.5, 0],
        [420, 130, 1.8, 7,   1.2],
        [55,  320, 2,   6.5, 0.6],
        [500, 310, 2.5, 5,   2],
        [180, 470, 1.8, 8,   0.3],
        [450, 460, 2,   6,   1.8],
        [95,  600, 2.2, 7.5, 0.9],
        [370, 630, 1.8, 5.5, 2.4],
        [545, 610, 2,   9,   0.5],
        [230, 760, 2.5, 6,   1.5],
        [490, 790, 1.8, 7,   0.2],
        [310, 870, 2,   5,   2.8],
        [60,  780, 2.2, 8.5, 1.1],
        [555, 480, 1.5, 6.5, 3],
        [310, 200, 2,   7.5, 0.7],
      ].map(([cx, cy, r, dur, delay], i) => (
        <circle key={i} cx={cx} cy={cy} r={r}
          fill="rgba(255,255,255,0.5)" filter="url(#dGlow)">
          <animate attributeName="cy"
            values={`${cy};${cy - 28};${cy}`}
            dur={`${dur}s`} repeatCount="indefinite" begin={`${delay}s`}
            calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
          <animate attributeName="opacity"
            values="0.2;0.7;0.2"
            dur={`${dur}s`} repeatCount="indefinite" begin={`${delay}s`}/>
        </circle>
      ))}

      {/* ════════════════════════
          HIGHLIGHT BRIGHT NODES
          (brighter accent points)
      ════════════════════════ */}
      <circle cx="330" cy="110" r="5" fill="rgba(216,180,254,0.85)" filter="url(#dGlow)">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="220" cy="430" r="5.5" fill="rgba(196,181,253,0.8)" filter="url(#dGlow)">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" begin="1s"/>
      </circle>
      <circle cx="340" cy="560" r="4.5" fill="rgba(216,180,254,0.75)" filter="url(#dGlow)">
        <animate attributeName="opacity" values="0.5;0.95;0.5" dur="3.5s" repeatCount="indefinite" begin="2s"/>
      </circle>
      <circle cx="200" cy="720" r="5" fill="rgba(196,181,253,0.8)" filter="url(#dGlow)">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="4.5s" repeatCount="indefinite" begin="0.5s"/>
      </circle>
    </svg>
  );
}
