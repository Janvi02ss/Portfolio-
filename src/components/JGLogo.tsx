import React from 'react';

interface JGLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'outline' | 'minimal';
}

export const JGLogo: React.FC<JGLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'solid',
}) => {
  const sizeMap = {
    sm: { box: 36, font: 16, stroke: 1.5, rx: 8 },
    md: { box: 48, font: 22, stroke: 2, rx: 12 },
    lg: { box: 64, font: 28, stroke: 2.5, rx: 16 },
    xl: { box: 80, font: 36, stroke: 3, rx: 20 },
  }[size];

  if (variant === 'minimal') {
    return (
      <div
        className={`inline-flex items-center justify-center font-heading font-extrabold tracking-tighter text-[#2B1E1A] ${className}`}
        style={{ fontSize: `${sizeMap.font * 1.2}px` }}
      >
        <span className="text-[#2B1E1A]">J</span>
        <span className="text-[#7A4B3A]">G</span>
      </div>
    );
  }

  if (variant === 'outline') {
    return (
      <div
        style={{
          width: `${sizeMap.box}px`,
          height: `${sizeMap.box}px`,
          borderRadius: `${sizeMap.rx}px`,
        }}
        className={`inline-flex items-center justify-center border-2 border-[#7A4B3A] bg-[#EFE8DE] text-[#2B1E1A] font-heading font-extrabold tracking-tight transition-transform hover:scale-105 select-none ${className}`}
      >
        <svg
          viewBox="0 0 100 100"
          width={sizeMap.box}
          height={sizeMap.box}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="20"
            stroke="#7A4B3A"
            strokeWidth="8"
            fill="#EFE8DE"
          />
          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            fill="#2B1E1A"
            fontFamily="Outfit, sans-serif"
            fontWeight="800"
            fontSize="44"
            letterSpacing="-2"
          >
            JG
          </text>
        </svg>
      </div>
    );
  }

  // Solid variant (rich espresso brown with warm sand monogram)
  return (
    <div
      style={{
        width: `${sizeMap.box}px`,
        height: `${sizeMap.box}px`,
        borderRadius: `${sizeMap.rx}px`,
      }}
      className={`inline-flex items-center justify-center bg-[#2B1E1A] text-[#F8F5F0] font-heading font-extrabold tracking-tight shadow-sm transition-transform hover:scale-105 select-none ${className}`}
      title="Janvi Gupta (JG) Logo"
    >
      <svg
        viewBox="0 0 100 100"
        width={sizeMap.box}
        height={sizeMap.box}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" rx="22" fill="#2B1E1A" />
        {/* Subtle decorative inner corner border line */}
        <rect x="6" y="6" width="88" height="88" rx="16" stroke="#D8C7B5" strokeWidth="2" strokeOpacity="0.3" />
        <text
          x="50%"
          y="65%"
          textAnchor="middle"
          fill="#F8F5F0"
          fontFamily="Outfit, sans-serif"
          fontWeight="800"
          fontSize="46"
          letterSpacing="-2.5"
        >
          <tspan fill="#F8F5F0">J</tspan>
          <tspan fill="#D8C7B5">G</tspan>
        </text>
      </svg>
    </div>
  );
};

export default JGLogo;
