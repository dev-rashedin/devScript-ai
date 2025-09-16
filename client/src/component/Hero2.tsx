'use client';

import { sponsorLogos } from '../data';
import Button from './ui/Button';
import HighlightedText from './ui/HighlightedText';
import Marquee from 'react-fast-marquee';
import { motion } from 'motion/react';
import {
  AiOutlineCode,
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineEdit,
} from 'react-icons/ai';

const floatAnim = {
  animate: { y: [0, -15, 0] },
  transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
};

const Hero = () => {
  return (
    <main className='min-h-[90vh] flex-col-center relative'>
      <section className='text-center max-w-3xl flex-col-center mx-auto px-1 py-16 space-y-2 relative'>
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
          <span className='font-bold'>Note:</span> Some features described here
          might be planned in our roadmap but not yet released. You can open a
          live chat from within your account and our Support team can offer more
          details or help you with workarounds.
        </p>

        {/* floating icons left */}
        <div className='hidden md:block absolute left-[-120px] top-1/3 space-y-12'>
          <motion.div {...floatAnim}>
            <AiOutlineCode size={40} className='text-primary' />
          </motion.div>
          <motion.div
            {...floatAnim}
            transition={{ ...floatAnim.transition, delay: 1 }}
          >
            <AiOutlineFileText size={40} className='text-secondary' />
          </motion.div>
        </div>

        {/* floating icons right */}
        <div className='hidden md:block absolute right-[-120px] top-1/3 space-y-12'>
          <motion.div {...floatAnim}>
            <AiOutlineMail size={40} className='text-accent' />
          </motion.div>
        </div>
        <div className='hidden md:block absolute right-[-180px] top-1/2 space-y-12'>
          <motion.div
            {...floatAnim}
            transition={{ ...floatAnim.transition, delay: 1 }}
          >
            <AiOutlineEdit size={40} className='text-primary' />
          </motion.div>
        </div>
      </section>

      {/* bottom marquee */}
      <section className='w-screen mt-12 bg-faded-pearl py-8'>
        <Marquee direction='left' speed={80} gradient={false}>
          {sponsorLogos.map((logo) => (
            <img
              key={logo.id}
              src={logo.href}
              alt={logo.name}
              className='h-12 mr-20'
            />
          ))}
        </Marquee>
      </section>
    </main>
  );
};

export default Hero;
