import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // milliseconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: 'sm' | 'md' | 'lg';
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 'sm',
  threshold = 0.12,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold, once]);

  // Translation offsets based on distance and direction
  const getTransformClass = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0';

    const distanceMap = {
      sm: {
        up: 'translate-y-5',
        down: '-translate-y-5',
        left: 'translate-x-5',
        right: '-translate-x-5',
      },
      md: {
        up: 'translate-y-9',
        down: '-translate-y-9',
        left: 'translate-x-9',
        right: '-translate-x-9',
      },
      lg: {
        up: 'translate-y-14',
        down: '-translate-y-14',
        left: 'translate-x-14',
        right: '-translate-x-14',
      },
    };

    if (direction === 'none') return 'opacity-0';
    return `opacity-0 ${distanceMap[distance][direction]}`;
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: '700ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
