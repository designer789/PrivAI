'use client';

import { useState } from 'react';
import FadeIn from './ui/FadeIn';

/**
 * FAQ Component
 * Displays frequently asked questions in an accordion layout
 * 
 * @component
 */
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is PrivAI?",
      answer: "PrivAI is a decentralized platform that integrates AI, TEE, and MCP to deliver secure, privacy-controlled services and automated Web3 operations."
    },
    {
      question: "Do I need $PRIV tokens to use PrivAI?",
      answer: "Basic AI functions are free to use. You only need $PRIV for advanced AI features, enhanced privacy tasks, staking, and governance participation."
    },
    {
      question: "How does the privacy mode work?",
      answer: "When enabled, privacy mode runs tasks inside Trusted Execution Environments (TEE), ensuring data confidentiality and producing on-chain attestations for verification."
    },
    {
      question: "What is MCP and why does it matter?",
      answer: "The Model Context Protocol (MCP) bridges AI Agents with on-chain and off-chain resources, allowing them to execute complex, context-aware tasks securely."
    },
    {
      question: "How do I earn rewards on PrivAI?",
      answer: "You can stake $PRIV, develop or lease AI Agents, contribute data for analysis, or participate in DAO governance to earn ecosystem rewards."
    },
    {
      question: "Can developers build on PrivAI?",
      answer: "Yes! Developers can create custom AI Agents, integrate PrivAI's privacy features into DApps, and access cross-chain tools using MCP, unlocking new Web3 applications."
    },
    {
      question: "Is PrivAI cross-chain compatible?",
      answer: "Absolutely. PrivAI supports seamless interoperability across multiple blockchain networks, enabling secure, privacy-preserving operations beyond a single chain."
    },
    {
      question: "How is PrivAI governed?",
      answer: "PrivAI is community-governed through a DAO, where $PRIV holders vote on protocol upgrades, ecosystem initiatives, and key decisions shaping the platform's future."
    }
  ];

  return (
    <section id="faq" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-sky-500/5 to-gray-900/0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
                FAQ
              </h2>
            </div>
          </FadeIn>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={50 * index}>
                <div
                  className="group border border-gray-700/50 rounded-xl overflow-hidden hover:border-sky-500/20 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sky-400 font-mono text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-lg font-medium text-white group-hover:text-sky-400 transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 py-5 text-gray-400 border-t border-gray-700/50">
                      <div className="prose prose-invert max-w-none">
                        {faq.answer}
                      </div>
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

export default FAQ; 