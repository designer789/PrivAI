'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useState, useEffect } from 'react';
import Image from 'next/image';
import FadeIn from './ui/FadeIn';

/**
 * CoreHighlights Component
 * Displays the core features and capabilities of PrivAI in a carousel
 * 
 * @component
 */
const CoreHighlights = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    containScroll: false,
    loop: true
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [autoplay, setAutoplay] = useState(true);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Autoplay logic
  useEffect(() => {
    if (!emblaApi || !autoplay) return;

    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoplayInterval);
  }, [emblaApi, autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = useCallback(() => setAutoplay(false), []);
  const handleMouseLeave = useCallback(() => setAutoplay(true), []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const highlights = [
    {
      title: "Dynamic Privacy Switching",
      description: "Easily toggle between public and privacy-protected modes, letting you control data exposure based on task sensitivity.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      image: "/images/core-highlights/dynamic-privacy-switching.png"
    },
    {
      title: "AI-Driven Automation",
      description: "Decentralized AI Agents execute complex tasks, integrating on-chain and off-chain data through MCP for smarter operations.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      image: "/images/core-highlights/ai-driven-automation.png"
    },
    {
      title: "Secure TEE Computation",
      description: "Leverage Trusted Execution Environments (TEE) to safeguard sensitive data and generate verifiable proofs of privacy.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      image: "/images/core-highlights/secure-tee-computation.png"
    },
    {
      title: "Cross-Chain Interoperability",
      description: "Seamlessly connect with multiple blockchain ecosystems for smooth, privacy-preserving task execution.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      image: "/images/core-highlights/cross-chain-interoperability.png"
    },
    {
      title: "AI Agent Marketplace",
      description: "Access or lease specialized AI Agents built by the community, from DeFi optimizers to data analyzers, with flexible pay-as-you-go options.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      image: "/images/core-highlights/ai-agent-marketplace.png"
    },
    {
      title: "Auditable Privacy Logs",
      description: "Generate encrypted, verifiable logs of private tasks for compliance, self-auditing, or reporting, without exposing raw data.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      image: "/images/core-highlights/auditable-privacy-logs.png"
    }
  ];

  return (
    <section id="core-highlights" className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          {/* Section header */}
          <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Core Highlights
            </h2>
          </div>
          </FadeIn>

          {/* Carousel container */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Carousel */}
            <FadeIn>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] lg:flex-[0_0_calc(50%-1rem)] min-w-0 ml-4"
                  >
                    <div className="group relative h-full rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-sky-500/20 transition-all duration-300">
                      {/* Grid pattern background with mask */}
                      <div className="absolute inset-0 [--border:rgb(14,165,233)] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:36px_36px] opacity-10 rounded-xl [mask-image:radial-gradient(ellipse_80%_80%_at_100%_0%,#000_0%,transparent_100%)]" />
                      
                      {/* Content */}
                      <div className="relative flex flex-col sm:flex-row h-full gap-4 sm:gap-8">
                        {/* Image placeholder */}
                        <div className="h-48 sm:h-auto sm:w-1/3 flex-shrink-0">
                          <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-700/50">
                            <Image 
                            src={highlight.image || ""}
                            alt={highlight.title} 
                            width={500} 
                            height={500} 
                            className="object-cover"
                            loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-4 sm:p-6">
                          <div className="flex flex-col h-full justify-between gap-4 sm:gap-8">
                            <div className="text-sky-400 text-2xl sm:text-3xl group-hover:text-sky-300 transition-colors flex-shrink-0">
                              {highlight.icon}
                            </div>
                            <div>
                              <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-white mb-2">
                                {highlight.title}
                              </h3>
                              <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                                {highlight.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </FadeIn>

            {/* Dot navigation */}
            <div className="flex justify-center mt-6 sm:mt-8 gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                    index === selectedIndex
                      ? 'bg-sky-500 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreHighlights; 