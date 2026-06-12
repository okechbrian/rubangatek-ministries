type IllustrationProps = {
  variant:
    | "hero"
    | "elderly"
    | "education"
    | "community"
    | "story"
    | "location"
    | "donate";
  className?: string;
};

export default function Illustration({ variant, className = "" }: IllustrationProps) {
  const base = `w-full h-full ${className}`;

  switch (variant) {
    case "hero":
      return (
        <svg className={base} viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="800" height="600" fill="#1E7A3B" />
          <circle cx="400" cy="300" r="250" fill="white" fillOpacity="0.05" />
          <circle cx="400" cy="300" r="180" fill="white" fillOpacity="0.08" />
          <g transform="translate(400,300)">
            <circle cx="0" cy="-60" r="40" fill="white" fillOpacity="0.15" />
            <ellipse cx="0" cy="20" rx="60" ry="40" fill="white" fillOpacity="0.1" />
            <path d="M-30,-40 Q-50,0 -60,60 M30,-40 Q50,0 60,60" stroke="white" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round" />
            <circle cx="0" cy="0" r="120" fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="2" strokeDasharray="8 8" />
          </g>
          <text x="400" y="500" textAnchor="middle" fill="white" fillOpacity="0.06" fontSize="120" fontWeight="bold" fontFamily="sans-serif">RM</text>
        </svg>
      );
    case "elderly":
      return (
        <svg className={base} viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="400" height="320" fill="#F3E4D0" />
          <circle cx="200" cy="120" r="40" fill="#1E7A3B" fillOpacity="0.15" />
          <path d="M160 180 Q200 160 240 180 L250 250 Q200 240 150 250 Z" fill="#1E7A3B" fillOpacity="0.12" />
          <path d="M170 190 Q160 220 155 260" stroke="#1E7A3B" strokeOpacity="0.2" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M230 190 Q240 220 245 260" stroke="#1E7A3B" strokeOpacity="0.2" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="185" cy="112" r="4" fill="#1E7A3B" fillOpacity="0.25" />
          <circle cx="215" cy="112" r="4" fill="#1E7A3B" fillOpacity="0.25" />
          <path d="M190 130 Q200 138 210 130" stroke="#1E7A3B" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
          <path d="M130 300 Q200 280 270 300" stroke="#F28C35" strokeOpacity="0.3" strokeWidth="3" strokeLinecap="round" />
          <path d="M120 310 Q200 290 280 310" stroke="#F28C35" strokeOpacity="0.15" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "education":
      return (
        <svg className={base} viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="400" height="320" fill="#F3E4D0" />
          <path d="M120 260 L200 200 L280 260 Z" fill="#1E7A3B" fillOpacity="0.1" stroke="#1E7A3B" strokeOpacity="0.2" strokeWidth="2" />
          <rect x="155" y="140" width="90" height="65" rx="4" fill="#1E7A3B" fillOpacity="0.08" stroke="#1E7A3B" strokeOpacity="0.15" strokeWidth="2" />
          <line x1="170" y1="155" x2="230" y2="155" stroke="#1E7A3B" strokeOpacity="0.2" strokeWidth="2" />
          <line x1="170" y1="165" x2="220" y2="165" stroke="#1E7A3B" strokeOpacity="0.15" strokeWidth="2" />
          <line x1="170" y1="175" x2="200" y2="175" stroke="#1E7A3B" strokeOpacity="0.12" strokeWidth="2" />
          <circle cx="200" cy="115" r="28" fill="#1E7A3B" fillOpacity="0.12" />
          <path d="M185 125 Q200 135 215 125" stroke="#1E7A3B" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
          <circle cx="200" cy="200" r="8" fill="#F28C35" fillOpacity="0.2" />
          <line x1="120" y1="220" x2="120" y2="270" stroke="#1E7A3B" strokeOpacity="0.1" strokeWidth="2" strokeLinecap="round" />
          <line x1="280" y1="220" x2="280" y2="270" stroke="#1E7A3B" strokeOpacity="0.1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "community":
      return (
        <svg className={base} viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="400" height="320" fill="#F3E4D0" />
          <circle cx="140" cy="120" r="25" fill="#1E7A3B" fillOpacity="0.12" />
          <circle cx="200" cy="105" r="25" fill="#1E7A3B" fillOpacity="0.15" />
          <circle cx="260" cy="120" r="25" fill="#1E7A3B" fillOpacity="0.12" />
          <circle cx="200" cy="90" r="18" fill="#F28C35" fillOpacity="0.1" />
          <path d="M120 160 Q140 145 160 160" stroke="#1E7A3B" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
          <path d="M180 145 Q200 135 220 145" stroke="#1E7A3B" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
          <path d="M240 160 Q260 145 280 160" stroke="#1E7A3B" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="140" cy="165" rx="30" ry="20" fill="#1E7A3B" fillOpacity="0.08" />
          <ellipse cx="200" cy="155" rx="30" ry="20" fill="#1E7A3B" fillOpacity="0.08" />
          <ellipse cx="260" cy="165" rx="30" ry="20" fill="#1E7A3B" fillOpacity="0.08" />
          <path d="M100 250 Q200 220 300 250" stroke="#1E7A3B" strokeOpacity="0.15" strokeWidth="3" strokeLinecap="round" />
          <path d="M90 270 Q200 240 310 270" stroke="#F28C35" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
          <circle cx="200" cy="185" r="12" fill="#1E7A3B" fillOpacity="0.06" />
        </svg>
      );
    case "story":
      return (
        <svg className={base} viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="400" height="320" fill="#F3E4D0" />
          <circle cx="180" cy="120" r="28" fill="#1E7A3B" fillOpacity="0.12" />
          <path d="M160 160 Q180 150 200 160 L205 220 Q180 215 155 220 Z" fill="#1E7A3B" fillOpacity="0.1" />
          <circle cx="260" cy="180" r="16" fill="#1E7A3B" fillOpacity="0.1" />
          <circle cx="280" cy="195" r="12" fill="#1E7A3B" fillOpacity="0.08" />
          <circle cx="240" cy="195" r="10" fill="#1E7A3B" fillOpacity="0.08" />
          <path d="M155 230 Q180 220 205 230" stroke="#1E7A3B" strokeOpacity="0.15" strokeWidth="2" strokeLinecap="round" />
          <path d="M245 215 Q260 210 275 215" stroke="#1E7A3B" strokeOpacity="0.12" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M250 205 Q260 202 270 205" stroke="#1E7A3B" strokeOpacity="0.12" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="120" cy="260" r="5" fill="#F28C35" fillOpacity="0.2" />
          <circle cx="145" cy="255" r="3" fill="#F28C35" fillOpacity="0.15" />
          <circle cx="105" cy="250" r="4" fill="#F28C35" fillOpacity="0.15" />
          <path d="M30 300 Q100 270 170 300" stroke="#1E7A3B" strokeOpacity="0.1" strokeWidth="2" strokeLinecap="round" />
          <path d="M230 300 Q300 280 370 300" stroke="#1E7A3B" strokeOpacity="0.1" strokeWidth="2" strokeLinecap="round" />
          <path d="M185 170 L195 170" stroke="#1E7A3B" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
          <path d="M170 175 L210 175" stroke="#1E7A3B" strokeOpacity="0.15" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "location":
      return (
        <svg className={base} viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="400" height="320" fill="#F3E4D0" />
          <path d="M200 80 Q200 40 240 60 Q280 80 260 120 Q240 160 200 200 Q160 160 140 120 Q120 80 160 60 Q200 40 200 80 Z" fill="#1E7A3B" fillOpacity="0.12" stroke="#1E7A3B" strokeOpacity="0.2" strokeWidth="2" />
          <circle cx="200" cy="110" r="25" fill="#1E7A3B" fillOpacity="0.08" />
          <circle cx="200" cy="110" r="12" fill="#F28C35" fillOpacity="0.2" />
          <circle cx="200" cy="110" r="5" fill="#F28C35" fillOpacity="0.3" />
          <line x1="80" y1="260" x2="320" y2="260" stroke="#1E7A3B" strokeOpacity="0.15" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 4" />
          <circle cx="100" cy="260" r="4" fill="#1E7A3B" fillOpacity="0.2" />
          <circle cx="200" cy="260" r="4" fill="#1E7A3B" fillOpacity="0.2" />
          <circle cx="300" cy="260" r="4" fill="#1E7A3B" fillOpacity="0.2" />
          <rect x="150" y="275" width="100" height="8" rx="4" fill="#1E7A3B" fillOpacity="0.08" />
        </svg>
      );
    case "donate":
      return (
        <svg className={base} viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="400" height="320" fill="#F3E4D0" />
          <circle cx="200" cy="140" r="60" fill="#1E7A3B" fillOpacity="0.08" stroke="#1E7A3B" strokeOpacity="0.15" strokeWidth="2" strokeDasharray="6 4" />
          <circle cx="200" cy="140" r="40" fill="none" stroke="#1E7A3B" strokeOpacity="0.12" strokeWidth="2" />
          <path d="M175 130 Q200 110 225 130 Q230 140 220 150 L200 175 L180 150 Q170 140 175 130 Z" fill="#1E7A3B" fillOpacity="0.15" stroke="#1E7A3B" strokeOpacity="0.25" strokeWidth="2" strokeLinejoin="round" />
          <path d="M185 135 Q200 122 215 135" stroke="#F28C35" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
          <line x1="130" y1="80" x2="170" y2="80" stroke="#1E7A3B" strokeOpacity="0.1" strokeWidth="2" strokeLinecap="round" />
          <line x1="230" y1="80" x2="270" y2="80" stroke="#1E7A3B" strokeOpacity="0.1" strokeWidth="2" strokeLinecap="round" />
          <line x1="120" y1="220" x2="280" y2="220" stroke="#1E7A3B" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round" />
          <line x1="140" y1="240" x2="260" y2="240" stroke="#1E7A3B" strokeOpacity="0.08" strokeWidth="2" strokeLinecap="round" />
          <line x1="160" y1="260" x2="240" y2="260" stroke="#1E7A3B" strokeOpacity="0.06" strokeWidth="2" strokeLinecap="round" />
          <circle cx="200" cy="140" r="8" fill="#F28C35" fillOpacity="0.15" />
        </svg>
      );
    default:
      return null;
  }
}
