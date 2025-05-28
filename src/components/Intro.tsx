'use client';

import { useEffect, useRef, useState } from 'react';
import FadeIn from './ui/FadeIn';

/**
 * Intro Component
 * Displays the main introduction text with a modern, clean layout
 * and interactive elements
 * 
 * @component
 */
const Intro = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, []);

  return (
    <section id="intro" className="py-32 relative" ref={containerRef}>
      {/* Grid cursor glow effect */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          backgroundImage: `
            radial-gradient(
              400px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(14, 165, 233, 0.15),
              transparent 40%
            ),
            linear-gradient(to right, rgb(14, 165, 233) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(14, 165, 233) 1px, transparent 1px)
          `,
          backgroundPosition: '0 0, 0 0, 0 0',
          backgroundRepeat: 'no-repeat, repeat, repeat',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          maskImage: `
            radial-gradient(
              400px circle at ${mousePosition.x}px ${mousePosition.y}px,
              black,
              transparent 40%
            ),
            linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)
          `,
          maskPosition: '0 0, 0 0, 0 0',
          maskRepeat: 'no-repeat, no-repeat, no-repeat',
          maskSize: '100% 100%, 100% 100%, 100% 100%',
          maskComposite: 'intersect'
        }}
      />

      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Content wrapper */}
          <FadeIn>
          <div className="relative">
            <p className="text-xl sm:text-3xl text-gray-300 leading-relaxed text-center">
              <span className="text-sky-400 font-semibold">PrivAI</span> combines{' '}
              <span className="inline-flex items-center gap-1 text-sky-400 font-medium hover:text-sky-300 transition-colors cursor-help" title="Artificial Intelligence">
                AI
              </span>,{' '}
              <span className="inline-flex items-center gap-1 text-sky-400 font-medium hover:text-sky-300 transition-colors cursor-help" title="Trusted Execution Environment">
                TEE
              </span>, and{' '}
              <span className="inline-flex items-center gap-1 text-sky-400 font-medium hover:text-sky-300 transition-colors cursor-help" title="Multi-Chain Protocol">
                MCP
              </span>
              {' '}to deliver secure, privacy-first decentralized services.
            </p>

            <p className="mt-6 text-xl sm:text-3xl text-gray-300 leading-relaxed text-center">
              With dynamic controls and automated AI Agents, it lets users handle sensitive tasks, optimize workflows, and power advanced Web3 use cases — all while keeping data protected.
            </p>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Intro; 