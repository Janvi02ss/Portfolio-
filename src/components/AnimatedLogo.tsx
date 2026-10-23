import React from 'react';

interface AnimatedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const dimensions = {
    sm: { box: 40, text: 'text-sm', sub: 'text-[9px]' },
    md: { box: 54, text: 'text-lg', sub: 'text-[11px]' },
    lg: { box: 72, text: 'text-2xl', sub: 'text-xs' },
  }[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center group cursor-pointer select-none ${className}`}
      title="Janvi Gupta (JG) Animated Logo"
    >
      {/* Outer rotating decorative animated dashed orbital ring */}
      <div
        style={{
          width: `${dimensions.box + 12}px`,
          height: `${dimensions.box + 12}px`,
        }}
        className="absolute inset-auto rounded-full border border-dashed border-[#C68B59]/40 animate-logo-ring pointer-events-none transition-all duration-300 group-hover:border-[#C68B59] group-hover:scale-110"
      />

      {/* Outer subtle glow blur */}
      <div
        style={{
          width: `${dimensions.box}px`,
          height: `${dimensions.box}px`,
        }}
        className="absolute rounded-2xl bg-gradient-to-tr from-[#C68B59] to-[#4A2E1F] opacity-25 blur-sm transition-all duration-300 group-hover:opacity-50 group-hover:scale-105"
      />

      {/* Main Core Badge */}
      <div
        style={{
          width: `${dimensions.box}px`,
          height: `${dimensions.box}px`,
        }}
        className="relative rounded-2xl bg-[#241711] border border-[#DAC9B6]/60 flex items-center justify-center overflow-hidden shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
      >
        {/* Subtle animated shimmer background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C68B59]/15 to-transparent animate-shimmer" />

        {/* Clear, crisp JG Monogram */}
        <div className="relative z-10 flex items-center font-display font-black tracking-tight leading-none">
          <span className="text-[#F9F6F0] drop-shadow-xs">J</span>
          <span className="text-[#C68B59] drop-shadow-xs -ml-0.5">G</span>
        </div>

        {/* Little decorative corner accent */}
        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#C68B59] animate-ping opacity-75" />
      </div>
    </div>
  );
};

export default AnimatedLogo;
