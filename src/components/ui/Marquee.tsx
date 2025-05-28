'use client';

import { type ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode[];
  direction?: 'up' | 'down';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

/**
 * Marquee Component
 * Creates an infinite vertical scrolling effect with customizable direction and speed
 * 
 * @param {ReactNode[]} children - Array of elements to scroll
 * @param {'up' | 'down'} direction - Scroll direction (default: 'up')
 * @param {'slow' | 'normal' | 'fast'} speed - Scroll speed (default: 'normal')
 * @param {string} className - Additional CSS classes
 */
const Marquee = ({ 
  children, 
  direction = 'up',
  speed = 'normal',
  className = ''
}: MarqueeProps) => {
  // Speed configurations in seconds
  const speedConfig = {
    slow: '30s',
    normal: '20s',
    fast: '10s'
  };

  return (
    <div className={`marquee-container ${className}`}>
      <div 
        className="marquee-scroll"
        style={{
          animationDuration: speedConfig[speed],
          animationDirection: direction === 'up' ? 'normal' : 'reverse'
        }}
      >
        {/* First set of items */}
        <div className="marquee-content">
          {children}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="marquee-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee; 