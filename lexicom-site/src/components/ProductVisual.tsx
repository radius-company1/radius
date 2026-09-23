import type { ProductId } from '../data/products';

type ProductVisualProps = {
  id: ProductId;
};

const glass = {
  fill: 'rgba(255, 255, 255, 0.42)',
  stroke: 'rgba(255, 255, 255, 0.72)',
  strokeWidth: 1.2,
};

export function ProductVisual({ id }: ProductVisualProps) {
  switch (id) {
    case 'neurobot':
      return (
        <svg className="product-visual product-visual--neurobot" viewBox="0 0 320 148" fill="none" aria-hidden="true">
          <defs>
            <radialGradient id="nb-pulse" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd43b" stopOpacity="0.7" />
              <stop offset="45%" stopColor="#2ed3ff" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#2ed3ff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Voice cloud */}
          <rect
            x="48"
            y="32"
            width="132"
            height="84"
            rx="22"
            fill="rgba(46, 211, 255, 0.14)"
            stroke="rgba(46, 211, 255, 0.48)"
            strokeWidth="1.2"
          />
          <path
            d="M88 74v-14M96 74v-8M104 74v-18M112 74v-6M120 74v-14M128 74v-10M136 74v-16M144 74v-7M152 74v-12"
            stroke="rgba(46, 211, 255, 0.75)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Text cloud */}
          <rect
            x="140"
            y="32"
            width="132"
            height="84"
            rx="22"
            fill="rgba(255, 212, 59, 0.14)"
            stroke="rgba(255, 212, 59, 0.5)"
            strokeWidth="1.2"
          />
          <rect x="164" y="58" width="72" height="5" rx="2.5" fill="rgba(12, 16, 32, 0.16)" />
          <rect x="164" y="70" width="52" height="5" rx="2.5" fill="rgba(12, 16, 32, 0.12)" />
          <rect x="164" y="82" width="64" height="5" rx="2.5" fill="rgba(12, 16, 32, 0.14)" />

          {/* Intersection pulse */}
          <circle cx="160" cy="74" r="22" fill="url(#nb-pulse)" />
          <circle cx="160" cy="74" r="10" fill="rgba(255, 255, 255, 0.55)" stroke="rgba(255, 212, 59, 0.6)" strokeWidth="1" />
        </svg>
      );

    case 'contact-center':
      return (
        <svg className="product-visual product-visual--contact-center" viewBox="0 0 320 148" fill="none" aria-hidden="true">
          {/* Phone */}
          <rect x="28" y="30" width="36" height="32" rx="10" fill="rgba(83, 103, 255, 0.12)" stroke="rgba(83, 103, 255, 0.42)" strokeWidth="1.2" />
          <path
            d="M39.2 38.2c1.1-1.1 2.9-1.1 3.9 0l1.1 1.1c.7.7.7 1.8 0 2.5l-1 1c.6 1.5 1.8 2.8 3.3 3.5l1-1c.7-.7 1.8-.7 2.5 0l1.1 1.1c1.1 1.1 1.1 2.9 0 3.9l-.8.8c-1.1 1.1-2.8 1.4-4.2.7-3.1-1.5-5.8-4.2-7.3-7.3-.7-1.4-.4-3.1.7-4.2l.7-.7z"
            fill="rgba(83, 103, 255, 0.28)"
            stroke="rgba(83, 103, 255, 0.55)"
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Message / email */}
          <rect x="28" y="58" width="36" height="32" rx="10" fill="rgba(46, 211, 255, 0.1)" stroke="rgba(46, 211, 255, 0.38)" strokeWidth="1.2" />
          <rect x="36" y="66" width="20" height="14" rx="2.5" fill="rgba(46, 211, 255, 0.16)" stroke="rgba(46, 211, 255, 0.45)" strokeWidth="1" />
          <path d="M37 67.5l9 6.5 9-6.5" stroke="rgba(46, 211, 255, 0.55)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />

          {/* Chat bubble */}
          <rect x="28" y="86" width="36" height="32" rx="10" fill="rgba(155, 92, 255, 0.1)" stroke="rgba(155, 92, 255, 0.35)" strokeWidth="1.2" />
          <path
            d="M36 95.5h16a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-5.5L42 111v-3.5H36a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4z"
            fill="rgba(155, 92, 255, 0.16)"
            stroke="rgba(155, 92, 255, 0.45)"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <circle cx="41" cy="102" r="1.2" fill="rgba(155, 92, 255, 0.55)" />
          <circle cx="46" cy="102" r="1.2" fill="rgba(155, 92, 255, 0.55)" />
          <circle cx="51" cy="102" r="1.2" fill="rgba(155, 92, 255, 0.55)" />

          {/* Workspace */}
          <rect
            x="100"
            y="24"
            width="118"
            height="100"
            rx="12"
            fill={glass.fill}
            stroke="rgba(83, 103, 255, 0.48)"
            strokeWidth="1.2"
          />
          <rect x="116" y="40" width="64" height="6" rx="3" fill="rgba(83, 103, 255, 0.22)" />
          <rect x="116" y="56" width="86" height="52" rx="10" fill="rgba(83, 103, 255, 0.08)" stroke="rgba(83, 103, 255, 0.28)" strokeWidth="1" />
          <circle cx="136" cy="78" r="10" fill="rgba(83, 103, 255, 0.18)" stroke="rgba(83, 103, 255, 0.42)" strokeWidth="1" />
          <path d="M126 94c4-6 16-6 20 0" stroke="rgba(83, 103, 255, 0.38)" strokeWidth="1.3" strokeLinecap="round" />
          <rect x="156" y="70" width="36" height="4" rx="2" fill="rgba(12, 16, 32, 0.12)" />
          <rect x="156" y="78" width="28" height="4" rx="2" fill="rgba(12, 16, 32, 0.1)" />
          <rect x="156" y="86" width="32" height="4" rx="2" fill="rgba(12, 16, 32, 0.1)" />

          {/* Connectors on flat edge of workspace (y within 36–112 for rx=12) */}
          <path
            d="M64 46H100M64 74H100M64 102H100"
            stroke="rgba(83, 103, 255, 0.62)"
            strokeWidth="1.7"
            strokeLinecap="butt"
          />
          <circle cx="64" cy="46" r="2.2" fill="rgba(83, 103, 255, 0.7)" />
          <circle cx="64" cy="74" r="2.2" fill="rgba(83, 103, 255, 0.7)" />
          <circle cx="64" cy="102" r="2.2" fill="rgba(83, 103, 255, 0.7)" />
          <circle cx="100" cy="46" r="2.2" fill="rgba(83, 103, 255, 0.7)" />
          <circle cx="100" cy="74" r="2.2" fill="rgba(83, 103, 255, 0.7)" />
          <circle cx="100" cy="102" r="2.2" fill="rgba(83, 103, 255, 0.7)" />

          {/* Workspace → sufler */}
          <path d="M218 62H228" stroke="rgba(230, 176, 40, 0.85)" strokeWidth="1.7" strokeLinecap="butt" />
          <circle cx="218" cy="62" r="2.2" fill="rgba(230, 176, 40, 0.9)" />
          <circle cx="228" cy="62" r="2.2" fill="rgba(230, 176, 40, 0.9)" />

          {/* Sufler cloud */}
          <rect
            x="228"
            y="36"
            width="68"
            height="52"
            rx="14"
            fill="rgba(255, 212, 59, 0.16)"
            stroke="rgba(255, 212, 59, 0.55)"
            strokeWidth="1.2"
          />
          <circle cx="280" cy="48" r="6" fill="rgba(255, 212, 59, 0.6)" stroke="rgba(255, 212, 59, 0.85)" strokeWidth="1" />
          <rect x="240" y="58" width="36" height="4" rx="2" fill="rgba(12, 16, 32, 0.14)" />
          <rect x="240" y="66" width="28" height="4" rx="2" fill="rgba(12, 16, 32, 0.1)" />
          <rect x="240" y="74" width="32" height="4" rx="2" fill="rgba(12, 16, 32, 0.1)" />
        </svg>
      );

    case 'ekc-110':
      return (
        <svg className="product-visual product-visual--ekc-110" viewBox="0 0 320 148" fill="none" aria-hidden="true">
          <rect x="24" y="24" width="44" height="32" rx="10" fill="rgba(255, 212, 59, 0.12)" stroke="rgba(255, 212, 59, 0.45)" strokeWidth="1.2" />
          <path d="M36 36h4v10h-4zM42 34v14M46 38v6" stroke="rgba(255, 212, 59, 0.65)" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="24" y="64" width="44" height="32" rx="10" fill="rgba(83, 103, 255, 0.1)" stroke="rgba(83, 103, 255, 0.38)" strokeWidth="1.2" />
          <rect x="34" y="74" width="24" height="12" rx="4" fill="rgba(83, 103, 255, 0.16)" stroke="rgba(83, 103, 255, 0.4)" strokeWidth="1" />
          <rect x="24" y="104" width="44" height="32" rx="10" fill="rgba(46, 211, 255, 0.1)" stroke="rgba(46, 211, 255, 0.38)" strokeWidth="1.2" />
          <rect x="34" y="114" width="24" height="12" rx="4" fill="rgba(46, 211, 255, 0.16)" stroke="rgba(46, 211, 255, 0.4)" strokeWidth="1" />
          <path d="M68 40h44M68 80h44M68 120h44" stroke="rgba(255, 212, 59, 0.42)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="160" cy="74" r="34" fill="rgba(255, 212, 59, 0.18)" stroke="rgba(255, 212, 59, 0.55)" strokeWidth="1.4" />
          <circle cx="160" cy="74" r="24" fill="rgba(21, 34, 56, 0.88)" stroke="rgba(255, 212, 59, 0.65)" strokeWidth="1.2" />
          <text x="160" y="80" textAnchor="middle" fill="#ffd43b" fontSize="16" fontWeight="700" fontFamily="Onest, system-ui, sans-serif">
            110
          </text>
          <path d="M194 74h28" stroke="rgba(83, 103, 255, 0.42)" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="222" y="28" width="74" height="28" rx="9" fill={glass.fill} stroke="rgba(83, 103, 255, 0.35)" strokeWidth="1.2" />
          <rect x="234" y="38" width="44" height="4" rx="2" fill="rgba(12, 16, 32, 0.12)" />
          <rect x="222" y="60" width="74" height="28" rx="9" fill={glass.fill} stroke="rgba(46, 211, 255, 0.32)" strokeWidth="1.2" />
          <rect x="234" y="70" width="36" height="4" rx="2" fill="rgba(12, 16, 32, 0.12)" />
          <rect x="222" y="92" width="74" height="28" rx="9" fill={glass.fill} stroke="rgba(155, 92, 255, 0.32)" strokeWidth="1.2" />
          <rect x="234" y="102" width="40" height="4" rx="2" fill="rgba(12, 16, 32, 0.12)" />
        </svg>
      );

    case 'speech-analytics':
      return (
        <svg className="product-visual product-visual--speech-analytics" viewBox="0 0 320 148" fill="none" aria-hidden="true">
          {/* Wave track */}
          <rect x="24" y="20" width="272" height="48" rx="14" fill="rgba(155, 92, 255, 0.1)" stroke="rgba(155, 92, 255, 0.35)" strokeWidth="1.2" />
          <path
            d="M44 44h5v-10M56 44v-6M68 44v-14M80 44v-5M92 44v-11M104 44v-7M116 44v-13M128 44v-4M140 44v-10M152 44v-8M164 44v-12M176 44v-5M188 44v-9M200 44v-6M212 44v-11M224 44v-4M236 44v-8M248 44v-5M260 44v-10M272 44v-6"
            stroke="rgba(155, 92, 255, 0.55)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Markers */}
          <circle cx="88" cy="44" r="5" fill="#9b5cff" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2" />
          <circle cx="160" cy="44" r="5" fill="#5367ff" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2" />
          <circle cx="232" cy="44" r="5" fill="#ffd43b" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2" />

          {/* Guides */}
          <path d="M88 49v18M160 49v18M232 49v18" stroke="rgba(155, 92, 255, 0.28)" strokeWidth="1.2" strokeLinecap="round" />

          {/* Chart panel */}
          <rect x="24" y="76" width="272" height="52" rx="14" fill={glass.fill} stroke="rgba(155, 92, 255, 0.28)" strokeWidth="1.2" />
          <rect x="72" y="96" width="16" height="24" rx="4" fill="rgba(155, 92, 255, 0.35)" />
          <rect x="144" y="88" width="16" height="32" rx="4" fill="rgba(83, 103, 255, 0.32)" />
          <rect x="216" y="92" width="16" height="28" rx="4" fill="rgba(255, 212, 59, 0.38)" />
          <path
            d="M72 108h16l72-12 72 8"
            stroke="rgba(83, 103, 255, 0.6)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'protocol':
      return (
        <svg className="product-visual product-visual--protocol" viewBox="0 0 320 148" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="pt-a" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5367ff" />
              <stop offset="100%" stopColor="#5367ff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="pt-b" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffd43b" />
              <stop offset="100%" stopColor="#ffd43b" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="pt-c" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2ed3ff" />
              <stop offset="100%" stopColor="#2ed3ff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Media block */}
          <rect x="20" y="18" width="44" height="28" rx="8" fill="rgba(46, 211, 255, 0.1)" stroke="rgba(46, 211, 255, 0.35)" strokeWidth="1" />
          <path d="M28 28h3v8h-3zM33 26v12M37 30v4" stroke="rgba(46, 211, 255, 0.55)" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="44" y="24" width="12" height="9" rx="2" fill="rgba(83, 103, 255, 0.2)" stroke="rgba(83, 103, 255, 0.4)" strokeWidth="0.8" />

          {/* Participants */}
          <circle cx="42" cy="62" r="8" fill="rgba(83, 103, 255, 0.22)" stroke="#5367ff" strokeWidth="1.5" />
          <circle cx="42" cy="88" r="8" fill="rgba(255, 212, 59, 0.24)" stroke="#ffd43b" strokeWidth="1.5" />
          <circle cx="42" cy="114" r="8" fill="rgba(46, 211, 255, 0.2)" stroke="#2ed3ff" strokeWidth="1.5" />

          {/* Transcript lines */}
          <rect x="72" y="56" width="88" height="8" rx="4" fill="url(#pt-a)" />
          <rect x="80" y="58" width="64" height="4" rx="2" fill="rgba(12, 16, 32, 0.1)" />
          <rect x="72" y="82" width="88" height="8" rx="4" fill="url(#pt-b)" />
          <rect x="80" y="84" width="52" height="4" rx="2" fill="rgba(12, 16, 32, 0.1)" />
          <rect x="72" y="108" width="88" height="8" rx="4" fill="url(#pt-c)" />
          <rect x="80" y="110" width="58" height="4" rx="2" fill="rgba(12, 16, 32, 0.1)" />

          {/* Connector */}
          <path d="M168 88h24" stroke="rgba(46, 211, 255, 0.4)" strokeWidth="1.5" strokeLinecap="round" />

          {/* Document */}
          <rect
            x="192"
            y="28"
            width="108"
            height="92"
            rx="16"
            fill={glass.fill}
            stroke="rgba(46, 211, 255, 0.4)"
            strokeWidth="1.2"
          />
          <rect x="208" y="44" width="52" height="6" rx="3" fill="rgba(83, 103, 255, 0.25)" />
          <rect x="208" y="60" width="72" height="4" rx="2" fill="rgba(12, 16, 32, 0.12)" />
          <rect x="208" y="72" width="64" height="4" rx="2" fill="rgba(12, 16, 32, 0.1)" />
          <rect x="208" y="84" width="68" height="4" rx="2" fill="rgba(12, 16, 32, 0.1)" />
          <rect x="208" y="96" width="56" height="4" rx="2" fill="rgba(12, 16, 32, 0.1)" />
          <circle cx="212" cy="62" r="2.5" fill="#5367ff" />
          <circle cx="212" cy="74" r="2.5" fill="#ffd43b" />
          <circle cx="212" cy="86" r="2.5" fill="#2ed3ff" />
        </svg>
      );
  }
}
