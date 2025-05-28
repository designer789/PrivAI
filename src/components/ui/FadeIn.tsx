'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

/**
 * FadeIn Component
 * Creates a fade-in animation effect when the element comes into view
 * 
 * @param {ReactNode} children - Content to animate
 * @param {number} delay - Animation delay in milliseconds
 * @param {'up' | 'down' | 'left' | 'right'} direction - Animation direction
 * @param {string} className - Additional CSS classes
 */
const FadeIn = ({ 
  children, 
  delay = 0,
  direction = 'up',
  className = ''
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(20px)';
      case 'down':
        return 'translateY(-20px)';
      case 'left':
        return 'translateX(20px)';
      case 'right':
        return 'translateX(-20px)';
      default:
        return 'translateY(20px)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0'
          : 'opacity-0'
      } ${className}`}
      style={{
        transform: isVisible ? 'none' : getTransform()
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn; 