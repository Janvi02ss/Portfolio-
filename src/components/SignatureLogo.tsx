import React from 'react';

interface SignatureLogoProps {
  className?: string;
  color?: string; // default rose or charcoal
  showUnderline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SignatureLogo: React.FC<SignatureLogoProps> = ({
  className = '',
  color = '#C9788A',
  showUnderline = true,
  size = 'md',
}) => {
  const dimensions = {
    sm: { width: 110, height: 48 },
    md: { width: 150, height: 64 },
    lg: { width: 210, height: 90 },
    xl: { width: 280, height: 120 },
  }[size];

  return (
    <div className={`inline-flex flex-col items-start ${className}`} title="Janvi Gupta Signature Logo">
      <svg
        viewBox="0 0 240 100"
        width={dimensions.width}
        height={dimensions.height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible select-none transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="signatureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9788A" />
            <stop offset="100%" stopColor="#A25365" />
          </linearGradient>
          <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#C9788A" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Cursive "Janvi" Wordmark Path Group */}
        <g stroke={color} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" filter="url(#subtleGlow)">
          {/* 'J' - Flowing capital cursive stem and head */}
          <path
            d="M 28 36 
               C 22 36, 16 38, 20 44
               C 24 50, 44 48, 48 30
               C 51 18, 46 14, 40 14
               C 34 14, 30 20, 32 30
               C 36 48, 40 70, 34 82
               C 30 89, 22 88, 22 82
               C 22 75, 29 70, 38 68"
          />

          {/* 'a' - Connected teardrop loop and downstroke */}
          <path
            d="M 44 64 
               C 50 56, 59 55, 62 61
               C 65 67, 62 76, 54 77
               C 47 77, 45 69, 49 61
               C 53 54, 62 55, 64 61
               L 64 76
               C 64 78, 67 78, 70 74"
          />

          {/* 'n' - First arch and second arch */}
          <path
            d="M 70 74
               L 72 60
               C 72 56, 78 54, 82 58
               L 82 76
               M 82 65
               C 85 56, 94 54, 98 58
               L 98 76
               C 98 79, 102 79, 105 73"
          />

          {/* 'v' - Valley dip and right flick */}
          <path
            d="M 105 73
               L 109 59
               C 111 68, 116 77, 122 76
               C 127 75, 131 66, 133 58
               C 134 54, 138 56, 140 62"
          />

          {/* 'i' - Upright stroke with terminal flick */}
          <path
            d="M 140 62
               L 143 58
               L 144 74
               C 144 78, 150 78, 154 72"
          />

          {/* Dot on the 'i' */}
          <circle cx="140" cy="45" r="3.2" fill={color} stroke="none" />

          {/* The signature's signature tilted Heart near top right */}
          <path
            d="M 166 38
               C 160 30, 165 22, 172 26
               C 176 29, 179 33, 185 41
               C 180 34, 183 25, 190 26
               C 197 27, 196 35, 190 43
               C 184 50, 176 54, 182 54"
            strokeWidth="2.8"
          />

          {/* Dynamic Underline flourish swooping from J to right */}
          {showUnderline && (
            <path
              d="M 20 86
                 C 28 98, 48 94, 75 87
                 C 115 76, 170 54, 215 36
                 C 219 34, 224 37, 219 41"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
          )}
        </g>
      </svg>
    </div>
  );
};

export default SignatureLogo;
