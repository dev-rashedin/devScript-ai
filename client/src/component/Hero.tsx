'use client';

import { sponsorLogos } from '../data';
import Button from './ui/Button';
import FloatingIcons from './ui/FloatingIcons';
import HighlightedText from './ui/HighlightedText';
import Marquee from 'react-fast-marquee';


const repeatedLogos = Array.from({ length: 3 }, () => sponsorLogos).flat();

const Hero = () => {
  return (
    <main className='h-[91.3vh] flex flex-col items-center justify-center space-y-28 '>
      <section className='mt-20 text-center max-w-3xl  mx-auto px-1 relative'>
        {/* hero text and buttons */}
        <div>
          {/* <p className='text-blue-700'>Your Ultimate Productivity tool</p> */}
          <h1 className=''>AI Assistant for</h1>
          <HighlightedText label='Developers & Writers' />

          <p className='md:text-lg lg:text-xl text-muted mt-4 lg:mt-8'>
            Explain code, refactor smarter, summarize documents, write articles,
            craft emails, and polish your resume — all in one place.
          </p>

          <div className='flex-center gap-4 mt-2 lg:mt-8'>
            <Button label='Get Started' type='primary' />
            <Button label='View Services' type='secondary' href='#services' />
          </div>

          <p className='text-muted text-[14px] mt-4 text-center'>
            <span className='font-bold'>Note:</span> Some features described
            here might be planned in our roadmap but not yet released. You can
            open a live chat from within your account and our Support team can
            offer more details or help you with workarounds.
          </p>
        </div>

        {/*  floating icons */}     
     <FloatingIcons/>
      </section>

      {/* bottom marquee */}
      <section className='w-[100%]  bg-faded-pearl'>
          <Marquee direction='left' speed={80} gradient={false}>
            {repeatedLogos.map((logo) => (
              <img
                key={`${logo.id}-${Math.random()}`}
                src={logo.href}
                alt={logo.name}
                className='h-9 mr-20'
              />
            ))}
          </Marquee>
      </section>
    </main>
  );
};

export default Hero;
