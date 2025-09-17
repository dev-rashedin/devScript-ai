'use client';

import { sponsorLogos } from '../data';
import Button from './ui/Button';
import HighlightedText from './ui/HighlightedText';
import Marquee from 'react-fast-marquee';
import banner from '../assets/banner.png';


const repeatedLogos = Array.from({ length: 3 }, () => sponsorLogos).flat();

const Hero = () => {
  return (
    <main className='h-[91.3vh] overflow-y-hidden boundary flex flex-col items-center justify-center'>
      <section className='flex flex-col-reverse items-center justify-center xl:px-12 xl:flex-row xl:items-center xl:justify-center overflow-hidden'>
        {/* hero text and buttons */}
        <div className='max-w-3xl flex flex-col justify-center items-center text-center  xl:items-start xl:text-left '>
          <h1>AI Assistant for</h1>
          <HighlightedText label='Developers & Writers' />

          <p className='md:text-lg lg:text-xl text-muted mt-6 xl:mt-9'>
            Explain code, refactor smarter, summarize documents, write articles,
            craft emails, and polish your resume — all in one place.
          </p>

          <div className='flex-center gap-4 mt-8 xl:mt-12'>
            <Button label='Get Started' type='primary' />
            <Button label='View Services' type='secondary' href='#services' />
          </div>

          <p className='max-w-2xl text-muted text-xs mt-4 text-center xl:mt-8 xl:text-left'>
            <span className='font-bold'>Note:</span> Some features described
            here might be planned in our roadmap but not yet released. You can
            open a live chat from within your account and our Support team can
            offer more details or help you with workarounds.
          </p>
        </div>
        {/* hero image */}
        <div className='hidden md:block w-[400px] h-auto lg:w-[400px] xl:w-[900px]'>
          <img src={banner} alt='coding' className='w-[1000px] h-full' />
        </div>
        {/*  floating icons */}
        {/* <FloatingIcons/> */}
      </section>

      {/* bottom marquee */}
      <section className='w-[100%] mt-12 lg:mt-16  bg-faded-pearl'>
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
