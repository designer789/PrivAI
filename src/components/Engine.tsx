'use client';

import { ReactNode } from 'react';
import FadeIn from './ui/FadeIn';

/**
 * CardDecorator Component
 * Creates a decorative container for icons with a grid pattern and border
 */
const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div aria-hidden className="relative mx-auto size-54 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_0%,transparent_100%)]">
    <div className="absolute inset-0 [--border:rgb(14,165,233)] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20"/>
    <div className="bg-gray-800 absolute inset-0 m-auto flex size-18 items-center justify-center">
      {children}
    </div>
  </div>
);

/**
 * Engine Component
 * Displays the technical infrastructure and core technologies behind PrivAI
 * 
 * @component
 */
const Engine = () => {
  const technologies = [
    {
      title: "Trusted Execution Environments (TEE)",
      description: "Provides hardware-based privacy by running sensitive computations inside secure enclaves, ensuring that data and models remain confidential and generating verifiable attestations on-chain.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Model Context Protocol (MCP)",
      description: "Acts as a standardized bridge between AI Agents and both on-chain smart contracts and off-chain data sources, enabling seamless, secure, and context-aware interactions across systems.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Blockchain Infrastructure",
      description: "Built on a multi-layer architecture combining public and privacy-focused blockchains, offering scalability, resilience, and interoperability for decentralized applications and AI-powered operations.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <section id="engine" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          {/* Section header */}
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
                The Engine Behind PrivAI
              </h2>
            </div>
          </FadeIn>

          {/* Technologies grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <FadeIn key={index} delay={200 * (index + 1)}>
                <div className="group relative p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-sky-500/20 transition-all duration-300">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-sky-500/10 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-sky-500/10 rounded-full blur-xl" />

                  {/* Content */}
                  <div className="relative">
                    <div className="text-sky-400">
                      <CardDecorator>
                        {tech.icon}
                      </CardDecorator>
                    </div>
                    <div className="text-center p-4">
                      <h3 className="text-2xl font-normal text-white mb-3 tracking-tight">
                        {tech.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-center text-base">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engine; 