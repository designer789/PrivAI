import Link from 'next/link';
import Image from 'next/image';
import Marquee from './ui/Marquee';
import FadeIn from './ui/FadeIn';

/**
 * Hero Component
 * 
 * A responsive hero section featuring:
 * - Brand badge with PrivAI logo
 * - Main heading with gradient text
 * - Feature list with check icons
 * - Call-to-action buttons
 * - Responsive layout that switches between vertical (mobile) and horizontal (desktop)
 * 
 * @component
 * @example
 * ```tsx
 * <Hero />
 * ```
 */
const Hero = () => {
  // Feature list items displayed with check icons
  const features = [
    "Seamless Privacy Switching",
    "AI-Enhanced Smart Operations",
    "Cross-Chain Privacy Collaboration",
    "Developer & User Ecosystem"
  ];

  // Images for each marquee column
  const leftColumnImages = [
    '/agent1.jpg',
    '/agent7.jpg',
    '/agent14.png',
    '/agent9.png',
    '/agent10.png',
  ];

  const centerColumnImages = [
    '/agent6.jpg',
    '/agent2.jpg',
    '/agent13.png',
    '/agent4.jpg',
    '/agent5.jpg',
  ];

  const rightColumnImages = [
    '/agent11.png',
    '/agent12.png',
    '/agent3.jpg',
    '/agent8.png',
    '/agent15.png',
  ];

  return (
    // Full-height section with centered content
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background image and gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/bg1.png"
          alt="Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-sky-900/20" />
      </div>
      
      {/* Main container with responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Flex container for horizontal layout on desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content section */}
          <div className="flex-1 max-w-2xl">
            {/* Brand badge with subtle background and border */}
            <FadeIn>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-base font-medium uppercase tracking-widest">
                  PrivAI
                </span>
              </div>
            </FadeIn>

            {/* Main heading with gradient text effect */}
            <FadeIn delay={200}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[1.2]">
                <span className="block text-white tracking-tight">
                  Think Private,<br /> Act Smart
                </span>
              </h1>
            </FadeIn>
            
            {/* Feature list with custom check icons */}
            <FadeIn delay={400}>
              <ul className="space-y-4 mt-12">
                {features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    {/* Custom SVG check icon */}
                    <svg 
                      className="h-6 w-6 text-sky-500 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Call-to-action buttons */}
            <FadeIn delay={600}>
              <div className="mt-16 flex flex-col sm:flex-row gap-4">
                {/* Primary CTA button */}
                <Link
                  href="https://x.com/PrivAI_Token"
                  target="_blank"
                  className="px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-medium transition-colors"
                >
                  Twitter
                </Link>
                {/* Secondary CTA button */}
                <Link
                  href="https://t.me/PrivAI_Official"
                  target="_blank"
                  className="px-8 py-3 rounded-full border border-sky-500 text-sky-400 hover:bg-sky-500/10 transition-colors"
                >
                  Telegram
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right section - Marquee container */}

            <div className="flex-1 hidden lg:block">
              <div className="grid grid-cols-3 gap-6 h-[800px]">
                {/* Left column - scrolling up */}
                <Marquee direction="up" speed="slow" className="h-full">
                  {leftColumnImages.map((src: string, index: number) => (
                    <div key={`left-${index}`} className="relative aspect-square rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 ">
                      <Image
                        src={src}
                        alt={`Agent ${index + 6}`}
                        fill
                        className="object-cover p-2 rounded-2xl"
                      />
                    </div>
                  ))}
                </Marquee>

                {/* Center column - scrolling down */}
                <Marquee direction="down" speed="slow" className="h-full">
                  {centerColumnImages.map((src: string, index: number) => (
                    <div key={`center-${index}`} className="relative aspect-square rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                      <Image
                        src={src}
                        alt={`Agent ${index + 1}`}
                        fill
                        className="object-cover p-2 rounded-2xl"
                      />
                    </div>
                  ))}
                </Marquee>

                {/* Right column - scrolling up */}
                <Marquee direction="up" speed="slow" className="h-full">
                  {rightColumnImages.map((src: string, index: number) => (
                    <div key={`right-${index}`} className="relative aspect-square rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                      <Image
                        src={src}
                        alt={`Agent ${index + 11}`}
                        fill
                        className="object-cover p-2 rounded-2xl"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
         
        </div>
      </div>
    </section>
  );
};

export default Hero; 