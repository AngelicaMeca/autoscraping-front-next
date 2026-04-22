'use client';

// Illustration 3 — "The Web-to-Data Journey"
// Visual narrative: Websites being scanned → AUTOScraping extracts → Clean structured data
export default function HeroIllustration3() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
      <svg viewBox="0 0 580 420" xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id="h3bg" cx="50%" cy="50%" r="55%">
            <stop offset="0%"   stopColor="#1a1866" stopOpacity="0.55"/>
            <stop offset="100%" stopColor="#0E155B" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="h3hub" cx="38%" cy="32%" r="68%">
            <stop offset="0%"   stopColor="#d8b4fe"/>
            <stop offset="45%"  stopColor="#9D62FA"/>
            <stop offset="100%" stopColor="#4c1d95"/>
          </radialGradient>
          <radialGradient id="h3imgA" cx="30%" cy="30%" r="70%">
            <stop offset="0%"   stopColor="#7c3aed" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.2"/>
          </radialGradient>
          <radialGradient id="h3imgB" cx="30%" cy="30%" r="70%">
            <stop offset="0%"   stopColor="#0891b2" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#0c1445" stopOpacity="0.2"/>
          </radialGradient>
          <linearGradient id="h3pricePill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#7c3aed"/>
            <stop offset="100%" stopColor="#4f46e5"/>
          </linearGradient>
          <linearGradient id="h3statusOk" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#4ade80"/>
            <stop offset="100%" stopColor="#22d3ee"/>
          </linearGradient>
          <linearGradient id="h3tableHead" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="rgba(157,98,250,0.25)"/>
            <stop offset="100%" stopColor="rgba(157,98,250,0.08)"/>
          </linearGradient>
          <filter id="h3shadow">
            <feDropShadow dx="0" dy="10" stdDeviation="18" floodColor="#000" floodOpacity="0.55"/>
          </filter>
          <filter id="h3glow">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="h3glowBig">
            <feGaussianBlur stdDeviation="7" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          {/* Particle motion paths — browser targets → engine */}
          <path id="h3mp1" d="M 154,118 C 215,90  268,175 296,210"/>
          <path id="h3mp2" d="M 154,180 C 215,180 268,202 296,210"/>
          <path id="h3mp3" d="M 154,240 C 215,265 268,230 296,210"/>
          {/* Particle motion paths — engine → data table */}
          <path id="h3mp4" d="M 296,210 C 340,200 372,102 400,80"/>
          <path id="h3mp5" d="M 296,210 C 340,210 372,160 400,148"/>
          <path id="h3mp6" d="M 296,210 C 340,215 372,225 400,218"/>

          {/* Clip for engine core */}
          <clipPath id="h3ec"><circle cx="296" cy="210" r="38"/></clipPath>
        </defs>

        {/* Ambient BG */}
        <ellipse cx="290" cy="210" rx="285" ry="205" fill="url(#h3bg)"/>

        {/* Subtle zone dividers */}
        <line x1="198" y1="10" x2="198" y2="400" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 10"/>
        <line x1="388" y1="10" x2="388" y2="400" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 10"/>

        {/* ════════════════════════════════════════
            BROWSER STACK — Left zone
        ════════════════════════════════════════ */}

        {/* Back browser (darkest, most rotated) */}
        <g transform="rotate(-9, 92, 165) translate(-14, 28)" opacity="0.22">
          <rect x="14" y="18" width="156" height="272" rx="10"
            fill="rgba(10,12,42,0.95)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
          <rect x="14" y="18" width="156" height="24" rx="10" fill="rgba(22,18,64,0.99)"/>
          <rect x="14" y="34"  width="156" height="8" fill="rgba(22,18,64,0.99)"/>
          <circle cx="26" cy="30" r="4" fill="#ff5f57" opacity="0.8"/>
          <circle cx="37" cy="30" r="4" fill="#febc2e" opacity="0.8"/>
          <circle cx="48" cy="30" r="4" fill="#28c840" opacity="0.8"/>
          <rect x="58" y="25" width="94" height="10" rx="5" fill="rgba(255,255,255,0.05)"/>
        </g>

        {/* Mid browser */}
        <g transform="rotate(-4, 92, 165) translate(-6, 12)" opacity="0.48">
          <rect x="14" y="18" width="156" height="272" rx="10"
            fill="rgba(10,12,42,0.97)" stroke="rgba(255,255,255,0.09)" strokeWidth="1"/>
          <rect x="14" y="18" width="156" height="24" rx="10" fill="rgba(22,18,64,0.99)"/>
          <rect x="14" y="34"  width="156" height="8" fill="rgba(22,18,64,0.99)"/>
          <circle cx="26" cy="30" r="4" fill="#ff5f57"/>
          <circle cx="37" cy="30" r="4" fill="#febc2e"/>
          <circle cx="48" cy="30" r="4" fill="#28c840"/>
          <rect x="58" y="25" width="94" height="10" rx="5" fill="rgba(255,255,255,0.06)"/>
          <rect x="20" y="50" width="144" height="18" rx="3" fill="rgba(255,255,255,0.04)"/>
          <rect x="20" y="74" width="60" height="55" rx="4" fill="rgba(255,255,255,0.03)"/>
          <rect x="88" y="74" width="64" height="55" rx="4" fill="rgba(255,255,255,0.03)"/>
          <rect x="20" y="136" width="132" height="6" rx="2" fill="rgba(255,255,255,0.05)"/>
          <rect x="20" y="148" width="110" height="4" rx="2" fill="rgba(255,255,255,0.04)"/>
          <rect x="20" y="158" width="120" height="4" rx="2" fill="rgba(255,255,255,0.04)"/>
        </g>

        {/* Front browser — full interactive detail */}
        <g transform="translate(14, 18)" filter="url(#h3shadow)">
          {/* Window background */}
          <rect x="0" y="0" width="158" height="280" rx="10"
            fill="rgba(8,10,38,0.98)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

          {/* ── Chrome bar ── */}
          <rect x="0" y="0" width="158" height="27" rx="10" fill="rgba(20,17,62,0.99)"/>
          <rect x="0" y="18" width="158" height="9"  fill="rgba(20,17,62,0.99)"/>
          <circle cx="13" cy="13.5" r="4.2" fill="#ff5f57"/>
          <circle cx="24" cy="13.5" r="4.2" fill="#febc2e"/>
          <circle cx="35" cy="13.5" r="4.2" fill="#28c840"/>
          <rect x="45" y="8" width="97" height="11" rx="5.5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
          <circle cx="50" cy="13.5" r="2.5" fill="rgba(74,222,128,0.7)"/>
          <text x="58" y="18" fill="rgba(255,255,255,0.38)" fontSize="6.8" fontFamily="monospace">shop.example.com</text>

          {/* ── Navbar ── */}
          <rect x="0" y="27" width="158" height="18" fill="rgba(13,11,45,0.99)"/>
          <text x="9"   y="40" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">Products</text>
          <text x="58"  y="40" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">Sale</text>
          <text x="84"  y="40" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">Reviews</text>
          <text x="120" y="40" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">🛒</text>

          {/* ── Hero banner ── */}
          <rect x="0" y="45" width="158" height="24" fill="rgba(109,62,193,0.18)"/>
          <text x="9"  y="55" fill="rgba(255,255,255,0.6)" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Electronics</text>
          <text x="9"  y="65" fill="rgba(255,255,255,0.3)" fontSize="6.5" fontFamily="monospace">1,240 products found</text>
          <rect x="120" y="49" width="28" height="12" rx="3" fill="rgba(157,98,250,0.5)"/>
          <text x="134" y="59" textAnchor="middle" fill="white" fontSize="6" fontFamily="monospace">Filter</text>

          {/* ── Section divider ── */}
          <line x1="0" y1="69" x2="158" y2="69" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

          {/* ───── PRODUCT ROW 1 ───── */}
          {/* Highlighted: scanning this row */}
          <rect x="4" y="72" width="150" height="54" rx="6" fill="rgba(157,98,250,0.07)"/>
          <rect x="4" y="72" width="150" height="54" rx="6" fill="none" stroke="rgba(157,98,250,0.7)" strokeWidth="1.5">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite"/>
            <animate attributeName="stroke-width" values="1.5;2.5;1.5" dur="1.8s" repeatCount="indefinite"/>
          </rect>
          {/* Product image */}
          <rect x="10" y="78" width="40" height="40" rx="5" fill="url(#h3imgA)"/>
          <text x="30" y="102" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="14">💻</text>
          {/* Product info */}
          <text x="57" y="88"  fill="rgba(255,255,255,0.8)" fontSize="7.5" fontFamily="monospace" fontWeight="bold">MacBook Pro 14"</text>
          <text x="57" y="98"  fill="rgba(255,255,255,0.3)" fontSize="6.5" fontFamily="monospace">Apple · M3 Pro · 18GB</text>
          {/* Rating */}
          <text x="57" y="108" fill="#fbbf24" fontSize="7" fontFamily="monospace">★★★★★</text>
          <text x="95" y="108" fill="rgba(255,255,255,0.25)" fontSize="6.5" fontFamily="monospace">(2,841)</text>
          {/* Price pill — highlighted as extracted data */}
          <rect x="57" y="112" width="50" height="11" rx="5" fill="url(#h3pricePill)">
            <animate attributeName="opacity" values="0.85;1;0.85" dur="1.8s" repeatCount="indefinite"/>
          </rect>
          <text x="82" y="121" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace" fontWeight="bold">$2,499</text>
          {/* Targeting crosshair */}
          <g>
            <circle cx="144" cy="99" r="9" fill="none" stroke="rgba(157,98,250,0.9)" strokeWidth="1.5">
              <animate attributeName="r" values="9;13;9" dur="1.8s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="144" cy="99" r="3.5" fill="rgba(157,98,250,1)" filter="url(#h3glow)"/>
            <line x1="144" y1="87"  x2="144" y2="91.5" stroke="#c4b5fd" strokeWidth="1.2"/>
            <line x1="144" y1="106.5" x2="144" y2="111" stroke="#c4b5fd" strokeWidth="1.2"/>
            <line x1="132" y1="99"  x2="136.5" y2="99" stroke="#c4b5fd" strokeWidth="1.2"/>
            <line x1="151.5" y1="99" x2="156"  y2="99" stroke="#c4b5fd" strokeWidth="1.2"/>
          </g>

          {/* ───── PRODUCT ROW 2 ───── */}
          <rect x="4" y="130" width="150" height="54" rx="6" fill="rgba(157,98,250,0.04)"/>
          <rect x="4" y="130" width="150" height="54" rx="6" fill="none" stroke="rgba(157,98,250,0.45)" strokeWidth="1.2">
            <animate attributeName="opacity" values="0.45;0.85;0.45" dur="2.2s" repeatCount="indefinite" begin="0.5s"/>
          </rect>
          <rect x="10" y="136" width="40" height="40" rx="5" fill="url(#h3imgB)"/>
          <text x="30" y="160" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="14">📱</text>
          <text x="57" y="146" fill="rgba(255,255,255,0.75)" fontSize="7.5" fontFamily="monospace" fontWeight="bold">iPhone 15 Pro</text>
          <text x="57" y="156" fill="rgba(255,255,255,0.3)" fontSize="6.5" fontFamily="monospace">Apple · 256GB · Titanio</text>
          <text x="57" y="166" fill="#fbbf24" fontSize="7" fontFamily="monospace">★★★★☆</text>
          <text x="95" y="166" fill="rgba(255,255,255,0.25)" fontSize="6.5" fontFamily="monospace">(5,102)</text>
          <rect x="57" y="170" width="44" height="11" rx="5" fill="url(#h3pricePill)">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.2s" repeatCount="indefinite" begin="0.5s"/>
          </rect>
          <text x="79" y="179" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace" fontWeight="bold">$999</text>
          <g>
            <circle cx="144" cy="157" r="9" fill="none" stroke="rgba(157,98,250,0.7)" strokeWidth="1.2">
              <animate attributeName="r" values="9;13;9" dur="2.2s" repeatCount="indefinite" begin="0.5s"/>
              <animate attributeName="opacity" values="0.7;0.15;0.7" dur="2.2s" repeatCount="indefinite" begin="0.5s"/>
            </circle>
            <circle cx="144" cy="157" r="3.5" fill="rgba(157,98,250,0.85)" filter="url(#h3glow)"/>
            <line x1="144" y1="145" x2="144" y2="149.5" stroke="#a78bfa" strokeWidth="1.2"/>
            <line x1="144" y1="164.5" x2="144" y2="169" stroke="#a78bfa" strokeWidth="1.2"/>
            <line x1="132" y1="157"  x2="136.5" y2="157" stroke="#a78bfa" strokeWidth="1.2"/>
            <line x1="151.5" y1="157" x2="156" y2="157" stroke="#a78bfa" strokeWidth="1.2"/>
          </g>

          {/* ───── PRODUCT ROW 3 ───── */}
          <rect x="4" y="188" width="150" height="54" rx="6" fill="rgba(157,98,250,0.02)"/>
          <rect x="4" y="188" width="150" height="54" rx="6" fill="none" stroke="rgba(157,98,250,0.3)" strokeWidth="1">
            <animate attributeName="opacity" values="0.3;0.65;0.3" dur="2.6s" repeatCount="indefinite" begin="1s"/>
          </rect>
          <rect x="10" y="194" width="40" height="40" rx="5" fill="url(#h3imgA)"/>
          <text x="30" y="218" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="14">🎧</text>
          <text x="57" y="204" fill="rgba(255,255,255,0.7)" fontSize="7.5" fontFamily="monospace" fontWeight="bold">AirPods Pro 2</text>
          <text x="57" y="214" fill="rgba(255,255,255,0.3)" fontSize="6.5" fontFamily="monospace">Apple · ANC · USB-C</text>
          <text x="57" y="224" fill="#fbbf24" fontSize="7" fontFamily="monospace">★★★★★</text>
          <text x="95" y="224" fill="rgba(255,255,255,0.25)" fontSize="6.5" fontFamily="monospace">(9,440)</text>
          <rect x="57" y="228" width="44" height="11" rx="5" fill="url(#h3pricePill)">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.6s" repeatCount="indefinite" begin="1s"/>
          </rect>
          <text x="79" y="237" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace" fontWeight="bold">$249</text>
          <g>
            <circle cx="144" cy="215" r="9" fill="none" stroke="rgba(157,98,250,0.55)" strokeWidth="1">
              <animate attributeName="r" values="9;13;9" dur="2.6s" repeatCount="indefinite" begin="1s"/>
              <animate attributeName="opacity" values="0.55;0.1;0.55" dur="2.6s" repeatCount="indefinite" begin="1s"/>
            </circle>
            <circle cx="144" cy="215" r="3.5" fill="rgba(157,98,250,0.75)" filter="url(#h3glow)"/>
            <line x1="144" y1="203"  x2="144" y2="207.5" stroke="#a78bfa" strokeWidth="1"/>
            <line x1="144" y1="222.5" x2="144" y2="227" stroke="#a78bfa" strokeWidth="1"/>
            <line x1="132" y1="215"  x2="136.5" y2="215" stroke="#a78bfa" strokeWidth="1"/>
            <line x1="151.5" y1="215" x2="156" y2="215"  stroke="#a78bfa" strokeWidth="1"/>
          </g>

          {/* Bottom gradient fade */}
          <rect x="0" y="248" width="158" height="32" rx="4"
            fill="rgba(8,10,38,0)" style={{
              background: 'linear-gradient(transparent, rgba(8,10,38,0.98))'
            }}/>
          <rect x="0" y="255" width="158" height="25" fill="rgba(8,10,38,0.7)"/>
          <text x="79" y="272" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="7" fontFamily="monospace">↓ 1,237 more products</text>
        </g>

        {/* ════════════════════════════════════════
            PARTICLES — Browser → Engine
        ════════════════════════════════════════ */}

        {/* Connecting curves (visible, dashed) */}
        <path d="M 154,118 C 215,90 268,175 296,210" fill="none" stroke="rgba(157,98,250,0.2)" strokeWidth="1.5" strokeDasharray="5 8">
          <animate attributeName="stroke-dashoffset" from="0" to="-52" dur="1.4s" repeatCount="indefinite"/>
        </path>
        <path d="M 154,180 C 215,180 268,202 296,210" fill="none" stroke="rgba(157,98,250,0.18)" strokeWidth="1.5" strokeDasharray="5 8">
          <animate attributeName="stroke-dashoffset" from="0" to="-52" dur="1.7s" repeatCount="indefinite"/>
        </path>
        <path d="M 154,240 C 215,265 268,228 296,210" fill="none" stroke="rgba(157,98,250,0.15)" strokeWidth="1.5" strokeDasharray="5 8">
          <animate attributeName="stroke-dashoffset" from="0" to="-52" dur="2s" repeatCount="indefinite"/>
        </path>

        {/* Particles row1 → engine */}
        {[0, 0.6, 1.2].map((delay, i) => (
          <circle key={`lp${i}`} r="4.5" fill="#c4b5fd" filter="url(#h3glow)">
            <animateMotion dur="1.8s" repeatCount="indefinite" begin={`${delay}s`}><mpath href="#h3mp1"/></animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="1.8s" repeatCount="indefinite" begin={`${delay}s`}/>
          </circle>
        ))}
        {/* Particles row2 → engine */}
        {[0.3, 0.9].map((delay, i) => (
          <circle key={`lp2${i}`} r="4.5" fill="#c4b5fd" filter="url(#h3glow)">
            <animateMotion dur="2s" repeatCount="indefinite" begin={`${delay}s`}><mpath href="#h3mp2"/></animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2s" repeatCount="indefinite" begin={`${delay}s`}/>
          </circle>
        ))}
        {/* Particles row3 → engine */}
        {[0.7, 1.4].map((delay, i) => (
          <circle key={`lp3${i}`} r="4.5" fill="#c4b5fd" filter="url(#h3glow)">
            <animateMotion dur="2.2s" repeatCount="indefinite" begin={`${delay}s`}><mpath href="#h3mp3"/></animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.2s" repeatCount="indefinite" begin={`${delay}s`}/>
          </circle>
        ))}

        {/* ════════════════════════════════════════
            ENGINE — Center
        ════════════════════════════════════════ */}
        <g transform="translate(296,210)">
          {/* Outer orbit ring, rotating dashes */}
          <circle r="72" fill="none" stroke="rgba(157,98,250,0.15)" strokeWidth="1" strokeDasharray="6 10">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite"/>
          </circle>
          {/* Mid pulsing ring */}
          <circle r="56" fill="rgba(157,98,250,0.06)" stroke="rgba(157,98,250,0.22)" strokeWidth="1.2">
            <animate attributeName="r"       values="56;61;56" dur="2.6s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.5;1"  dur="2.6s" repeatCount="indefinite"/>
          </circle>
          {/* Inner ring */}
          <circle r="44" fill="rgba(157,98,250,0.1)" stroke="rgba(157,98,250,0.3)" strokeWidth="1.5">
            <animate attributeName="r" values="44;47;44" dur="2.6s" repeatCount="indefinite" begin="0.3s"/>
          </circle>
          {/* Core gradient circle */}
          <circle r="34" fill="url(#h3hub)" filter="url(#h3glowBig)">
            <animate attributeName="r" values="34;36.5;34" dur="2.2s" repeatCount="indefinite"/>
          </circle>
          {/* Scan line inside core */}
          <rect x="-34" y="-1.5" width="68" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" clipPath="url(#h3ec)">
            <animateTransform attributeName="transform" type="translate" values="0,-36; 0,36" dur="2.5s" repeatCount="indefinite"/>
          </rect>
          {/* Logo */}
          <text y="-6" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.5">AUTO</text>
          <text y="8"  textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8" fontFamily="monospace" letterSpacing="1">scraping</text>
          {/* Status dots */}
          {[-9,-3,3,9].map((x,i) => (
            <circle key={i} cx={x} cy="20" r="2.5" fill={i===2 ? '#fbbf24' : '#4ade80'}>
              <animate attributeName="opacity" values="1;0.2;1" dur="1.3s" repeatCount="indefinite" begin={`${i*0.25}s`}/>
            </circle>
          ))}

          {/* Orbiting nodes (process steps) */}
          {[
            { angle: -90, label: 'COLLECT', color: '#9D62FA' },
            { angle: 0,   label: 'CLEAN',   color: '#6366f1' },
            { angle: 90,  label: 'STRUCTURE',color: '#4f46e5' },
            { angle: 180, label: 'DELIVER',  color: '#7c3aed' },
          ].map(({ angle, label, color }, i) => {
            const rad = (angle * Math.PI) / 180;
            const ox = Math.cos(rad) * 56;
            const oy = Math.sin(rad) * 56;
            return (
              <g key={i} transform={`translate(${ox}, ${oy})`}>
                <circle r="13" fill={`${color}22`} stroke={`${color}60`} strokeWidth="1.2"/>
                <text y="3.5" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="5.5" fontFamily="monospace" fontWeight="bold">{label}</text>
              </g>
            );
          })}
        </g>

        {/* ════════════════════════════════════════
            PARTICLES — Engine → Data table
        ════════════════════════════════════════ */}

        {/* Connecting output curves */}
        <path d="M 296,210 C 340,200 372,102 400,80"  fill="none" stroke="rgba(34,211,238,0.18)" strokeWidth="1.5" strokeDasharray="5 8">
          <animate attributeName="stroke-dashoffset" from="0" to="-52" dur="1.5s" repeatCount="indefinite"/>
        </path>
        <path d="M 296,210 C 340,210 372,160 400,148" fill="none" stroke="rgba(34,211,238,0.15)" strokeWidth="1.5" strokeDasharray="5 8">
          <animate attributeName="stroke-dashoffset" from="0" to="-52" dur="1.8s" repeatCount="indefinite"/>
        </path>
        <path d="M 296,210 C 340,216 372,228 400,218" fill="none" stroke="rgba(34,211,238,0.12)" strokeWidth="1.5" strokeDasharray="5 8">
          <animate attributeName="stroke-dashoffset" from="0" to="-52" dur="2.1s" repeatCount="indefinite"/>
        </path>

        {/* Output particles */}
        {[
          { href: '#h3mp4', color: '#67e8f9', dur: '1.7s', delays: [0, 0.8] },
          { href: '#h3mp5', color: '#67e8f9', dur: '2s',   delays: [0.4, 1.1] },
          { href: '#h3mp6', color: '#67e8f9', dur: '2.3s', delays: [0.7, 1.6] },
        ].map(({ href, color, dur, delays }, pi) =>
          delays.map((delay, di) => (
            <circle key={`rp${pi}-${di}`} r="4.5" fill={color} filter="url(#h3glow)">
              <animateMotion dur={dur} repeatCount="indefinite" begin={`${delay}s`}><mpath href={href}/></animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={dur} repeatCount="indefinite" begin={`${delay}s`}/>
            </circle>
          ))
        )}

        {/* ════════════════════════════════════════
            DATA TABLE — Right zone
        ════════════════════════════════════════ */}
        <g transform="translate(400, 20)" filter="url(#h3shadow)">
          {/* Card */}
          <rect x="0" y="0" width="170" height="305" rx="12"
            fill="rgba(7,9,36,0.97)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
          {/* Purple top accent */}
          <rect x="0" y="0" width="170" height="2.5" rx="1.5" fill="rgba(34,211,238,0.5)"/>

          {/* Card header */}
          <rect x="0" y="0" width="170" height="36" rx="12" fill="rgba(15,20,55,0.98)"/>
          <rect x="0" y="24" width="170" height="12" fill="rgba(15,20,55,0.98)"/>
          <circle cx="14" cy="18" r="5" fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.5)" strokeWidth="1">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="14" cy="18" r="2.5" fill="#22d3ee"/>
          <text x="25" y="22" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="monospace" fontWeight="bold">Extracted Data</text>
          <text x="130" y="22" fill="rgba(34,211,238,0.6)" fontSize="7.5" fontFamily="monospace">LIVE</text>

          {/* Table header row */}
          <rect x="8" y="40" width="154" height="22" rx="5" fill="url(#h3tableHead)"/>
          <text x="14"  y="55" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="monospace" fontWeight="bold">PRODUCT</text>
          <text x="112" y="55" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="monospace" fontWeight="bold">PRICE</text>
          <text x="152" y="55" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="monospace" fontWeight="bold">ST.</text>

          {/* Data rows */}
          {[
            { name: 'MacBook Pro 14"', price: '$2,499', ok: true,  y: 76,  delay: '0.6s' },
            { name: 'iPhone 15 Pro',   price: '$999',   ok: true,  y: 114, delay: '1.2s' },
            { name: 'AirPods Pro 2',   price: '$249',   ok: false, y: 152, delay: '1.8s' },
            { name: 'iPad Air M2',     price: '$749',   ok: true,  y: 190, delay: '2.4s' },
            { name: 'Apple Watch S9',  price: '$399',   ok: true,  y: 228, delay: '3.0s' },
            { name: 'Mac Mini M4',     price: '$599',   ok: true,  y: 266, delay: '3.6s' },
          ].map((row, i) => (
            <g key={i} opacity="0">
              <animate attributeName="opacity" from="0" to="1" begin={row.delay} dur="0.5s" fill="freeze"/>
              {/* Row bg */}
              {i % 2 === 0 && <rect x="8" y={row.y - 14} width="154" height="34" rx="4" fill="rgba(255,255,255,0.022)"/>}
              {/* Left accent bar */}
              <rect x="8" y={row.y - 11} width="2.5" height="28" rx="1.5"
                fill={row.ok ? '#4ade80' : '#f87171'} opacity="0.7"/>
              {/* Product name */}
              <text x="16" y={row.y} fill="rgba(255,255,255,0.78)" fontSize="8" fontFamily="monospace">{row.name}</text>
              {/* Category tag */}
              <text x="16" y={row.y+11} fill="rgba(255,255,255,0.22)" fontSize="6.5" fontFamily="monospace">Apple Electronics</text>
              {/* Price */}
              <text x="112" y={row.y+4} fill="#c4b5fd" fontSize="8.5" fontFamily="monospace" fontWeight="bold">{row.price}</text>
              {/* Status */}
              <rect x="150" y={row.y - 9} width="14" height="14" rx="7"
                fill={row.ok ? 'rgba(74,222,128,0.15)' : 'rgba(248,113,113,0.15)'}
                stroke={row.ok ? 'rgba(74,222,128,0.5)' : 'rgba(248,113,113,0.5)'}
                strokeWidth="1"/>
              <text x="157" y={row.y + 1} textAnchor="middle"
                fill={row.ok ? '#4ade80' : '#f87171'} fontSize="8" fontFamily="monospace">
                {row.ok ? '✓' : '✗'}
              </text>
              {/* Bottom divider */}
              <line x1="8" y1={row.y + 18} x2="162" y2={row.y + 18}
                stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            </g>
          ))}

          {/* Scanning highlight */}
          <rect x="8" y="62" width="154" height="2" rx="1" fill="rgba(34,211,238,0.5)" opacity="0">
            <animate attributeName="y" values="62;292;62" dur="4s" repeatCount="indefinite" calcMode="linear"/>
            <animate attributeName="opacity" values="0;0.5;0.5;0" keyTimes="0;0.05;0.95;1" dur="4s" repeatCount="indefinite"/>
          </rect>

          {/* Footer */}
          <line x1="0" y1="295" x2="170" y2="295" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <text x="14" y="308" fill="rgba(255,255,255,0.2)" fontSize="7" fontFamily="monospace">6 / 1,240 extracted</text>
          <circle cx="152" cy="304" r="3.5" fill="rgba(74,222,128,0.6)">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
          </circle>
        </g>

        {/* ════════════════════════════════════════
            SECTION LABELS
        ════════════════════════════════════════ */}
        <text x="93"  y="404" textAnchor="middle" fill="rgba(157,98,250,0.45)" fontSize="8.5" fontFamily="monospace" letterSpacing="2">THE WEB</text>
        <text x="296" y="404" textAnchor="middle" fill="rgba(255,255,255,0.22)" fontSize="8.5" fontFamily="monospace" letterSpacing="2">EXTRACTION</text>
        <text x="485" y="404" textAnchor="middle" fill="rgba(34,211,238,0.45)" fontSize="8.5" fontFamily="monospace" letterSpacing="2">CLEAN DATA</text>

        {/* Flow arrows between zones */}
        <text x="199" y="216" textAnchor="middle" fill="rgba(157,98,250,0.35)" fontSize="16">›</text>
        <text x="389" y="216" textAnchor="middle" fill="rgba(34,211,238,0.35)" fontSize="16">›</text>
      </svg>
    </div>
  );
}
