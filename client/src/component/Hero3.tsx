'use client';

import { sponsorLogos } from '../data';
import Button from './ui/Button';
import HighlightedText from './ui/HighlightedText';
import Marquee from 'react-fast-marquee';

const Hero = () => {
  return (
    <main className='relative min-h-screen flex flex-col justify-between  overflow-hidden'>
      {/* Subtle background blob (optional) */}
      <div className='absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-400 rounded-full blur-3xl opacity-30 z-0'></div>
      <div className='absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-blue-400 rounded-full blur-3xl opacity-30 z-0'></div>

      <section className='w-full px-4 py-16 lg:py-24 relative z-10'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left: Text Content */}
          <div className='text-center lg:text-left max-w-3xl mx-auto'>
            <p className='text-sm font-medium text-blue-500 uppercase tracking-wide mb-3'>
              Your productivity sidekick
            </p>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900'>
              AI Assistant for
            </h1>
            <HighlightedText label='Developers & Writers' />

            <p className='text-muted md:text-lg lg:text-xl mt-6 max-w-xl mx-auto lg:mx-0'>
              Explain code, refactor smarter, summarize documents, write
              articles, craft emails, and polish your resume — all in one place.
            </p>

            <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8'>
              <Button label='Get Started' type='primary' />
              <Button label='View Services' type='secondary' href='#services' />
            </div>

            <p className='text-muted text-sm mt-4 lg:mt-6 max-w-xl mx-auto lg:mx-0'>
              <span className='font-semibold'>Note:</span> Some features
              described here might be planned in our roadmap but not yet
              released. You can open a live chat from within your account and
              our Support team can offer more details or help you with
              workarounds.
            </p>
          </div>

          {/* Right: Feature Grid (No images, just icons + text) */}
          <div className='hidden lg:block'>
            <div className='grid grid-cols-2 gap-6 text-left text-muted text-base max-w-md mx-auto'>
              <div className='flex items-start gap-3'>
                <span className='text-blue-500 text-xl'>💡</span>
                <span>Explain complex code instantly</span>
              </div>
              <div className='flex items-start gap-3'>
                <span className='text-green-500 text-xl'>🧠</span>
                <span>Summarize large documents</span>
              </div>
              <div className='flex items-start gap-3'>
                <span className='text-purple-500 text-xl'>✍️</span>
                <span>Write articles with AI</span>
              </div>
              <div className='flex items-start gap-3'>
                <span className='text-yellow-500 text-xl'>📧</span>
                <span>Craft professional emails</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom marquee */}
      <section className='w-screen bg-faded-pearl py-8 z-10'>
        <div className='boundary'>
          <Marquee direction='left' speed={80} gradient={false}>
            {sponsorLogos.map((logo) => (
              <img
                key={logo.id}
                src={logo.href}
                alt={logo.name}
                className='h-12 mr-20 grayscale hover:grayscale-0 transition duration-300'
              />
            ))}
          </Marquee>
        </div>
      </section>
    </main>
  );
};

export default Hero;
